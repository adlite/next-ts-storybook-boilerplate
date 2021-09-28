import queryString from 'query-string';

import {
  ApiHttpStatusCode,
  ApiHttpMethod,
  ApiFilledOptions,
  ApiBaseOptions,
  ApiRequestOptions,
  ApiResponse,
  ApiRequestOptionsConvertResponseDataFetch,
  ApiRequestOptionsConvertResponseDataXHR,
  ApiRequestOptionsDataObject,
  ApiStatusMessages,
} from '~/services/types';
import {concatLinks} from '~/utils/url';
import {isObject} from '~/utils/helpers';

/**
 * Wrapper around fetch() for AJAX requests
 * @class Api
 */
export default class Api {
  /**
   * Default requests options for all Api instances
   */
  protected static readonly defaultOptions: ApiFilledOptions = {
    route: '/',
    data: {},
    dataType: 'json',
    convertResponseData: 'json',
    onResponse: () => null,
    onError: () => null,
    onUploadProgress: () => null,
    onUploadProgressStart: () => null,
    onUploadProgressEnd: () => null,
    statusMessages: {},
    headers: {},
    executor: 'fetch',
  };

  protected readonly serverUnknownErrorMessage = 'Unknown server error';

  /**
   * Base API URL
   */
  protected baseUrl!: string;

  /**
   * Options merged with Api.defaultOptions when instance created.
   * Used for all requests and can be overridden by specific request options.
   */
  protected baseOptions!: ApiFilledOptions;

  /**
   * @constructor
   */
  constructor(baseUrl: string, options: ApiBaseOptions = {}) {
    this.baseUrl = baseUrl;
    this.baseOptions = {
      ...Api.defaultOptions,
      ...options,
    };
  }

  /**
   * GET request
   */
  get<T>(options: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.makeRequest(ApiHttpMethod.GET, options);
  }

  /**
   * POST request
   */
  post<T>(options: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.makeRequest(ApiHttpMethod.POST, options);
  }

  /**
   * PUT request
   */
  put<T>(options: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.makeRequest(ApiHttpMethod.PUT, options);
  }

  /**
   * PATCH request
   */
  patch<T>(options: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.makeRequest(ApiHttpMethod.PATCH, options);
  }

  /**
   * DELETE request
   */
  delete<T>(options: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.makeRequest(ApiHttpMethod.DELETE, options);
  }

  /**
   * Common method for API requests
   */
  async makeRequest<T>(method: ApiHttpMethod, options: ApiRequestOptions): Promise<ApiResponse<T>> {
    /**
     * Create request specific options
     */
    const reqOptions: ApiFilledOptions = {
      ...this.baseOptions,
      ...options,
    };

    // create headers per request
    if (isObject(options.headers)) {
      reqOptions.headers = {
        ...this.baseOptions.headers,
        ...options.headers,
      };
    }

    switch (reqOptions.executor) {
      case 'fetch':
        return await this.makeFetchRequest<T>(method, reqOptions);
      case 'xhr':
        return await this.makeXhrRequest<T>(method, reqOptions);
      default:
        return this.makeResponse<T>({} as T, -1, 'Invalid executor');
    }
  }

  /**
   * Invokes request with fetch
   */
  protected async makeFetchRequest<T>(method: ApiHttpMethod, options: ApiFilledOptions): Promise<ApiResponse<T>> {
    try {
      // Create fetch init options
      const fetchOptions = this.makeFetchOptions(method, options);

      // Make request
      const response = await fetch(this.makeUrl(method, options), fetchOptions);
      const message = this.getResponseMessage(response, options.statusMessages);
      const payload = await response[options.convertResponseData as ApiRequestOptionsConvertResponseDataFetch]();

      if (Api.isStatusSuccessful(response.status)) {
        // Success response
        const apiResponse = this.makeResponse<T>(payload, response.status, message);
        options.onResponse(apiResponse);
        return apiResponse;
      } else {
        // Rejected response with status >= 400
        const apiResponse = this.makeResponse<T>(payload, response.status, message);
        options.onError(apiResponse);
        return apiResponse;
      }
    } catch (err) {
      // Runtime and internet connection errors
      const apiResponse = this.makeResponse<T>({} as T, 400, this.getErrorMessageFromCatch(err));
      options.onError(apiResponse);
      return apiResponse;
    }
  }

  /**
   * Invokes request with XMLHttpRequest.
   * This allows you to use 'onUploadProgress' event
   */
  protected makeXhrRequest<T>(method: ApiHttpMethod, options: ApiFilledOptions): Promise<ApiResponse<T>> {
    return new Promise(resolve => {
      try {
        const xhr = new XMLHttpRequest();
        let body: XMLHttpRequestBodyInit = '';

        xhr.responseType = options.convertResponseData as ApiRequestOptionsConvertResponseDataXHR;

        xhr.upload.onprogress = event => {
          const percentage = Math.floor((event.loaded / event.total) * 100);

          if (percentage === 0) {
            return options.onUploadProgressStart(event);
          }

          if (percentage === 100) {
            return options.onUploadProgressEnd(event);
          }

          return options.onUploadProgress(percentage, event);
        };

        xhr.onloadend = () => {
          const message = this.getResponseMessage(xhr, options.statusMessages);
          const payload = xhr.response || xhr.responseText;

          if (Api.isStatusSuccessful(xhr.status)) {
            // Success response
            const apiResponse = this.makeResponse(payload, xhr.status, message);
            options.onResponse(apiResponse);
            return resolve(apiResponse);
          } else {
            // Rejected response with status >= 400
            const apiResponse = this.makeResponse(payload, xhr.status, message);
            options.onError(apiResponse);
            return resolve(apiResponse);
          }
        };

        xhr.open(method, this.makeUrl(method, options), true);

        // populate body by content specific headers and data conversions if method is not GET
        if (method !== ApiHttpMethod.GET) {
          switch (options.dataType) {
            case 'json': {
              body = JSON.stringify(options.data);
              xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
              break;
            }
            case 'urlencoded': {
              body = queryString.stringify(options.data as Record<string, unknown>);
              xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
              break;
            }
            case 'form-data': {
              body = options.data as XMLHttpRequestBodyInit;
              xhr.setRequestHeader('Content-Type', `multipart/form-data;boundary=${Api.generateFormDataBoundary()}`);
              break;
            }
            default: {
              body = options.data as XMLHttpRequestBodyInit;
              break;
            }
          }
        }

        // Set headers
        for (const [header, value] of Object.entries(options.headers)) {
          xhr.setRequestHeader(header, value);
        }

        xhr.send(body);
      } catch (err) {
        // Runtime and internet connection errors
        const apiResponse = this.makeResponse<T>({} as T, 400, this.getErrorMessageFromCatch(err));
        options.onError(apiResponse);
        return resolve(apiResponse);
      }
    });
  }

  /**
   * Transforms `ApiRequestOptions.data` object to query-string if `method` is `GET`
   */
  protected makeUrl(method: ApiHttpMethod, reqOptions: ApiFilledOptions): string {
    const url = concatLinks(this.baseUrl, reqOptions.route);

    // populate query string params with data fields
    if (method === ApiHttpMethod.GET && Object.keys(reqOptions.data).length > 0) {
      return `${url}?${queryString.stringify(reqOptions.data as ApiRequestOptionsDataObject, {
        arrayFormat: 'bracket',
      })}`;
    }

    return url;
  }

  /**
   * Creates options compatible with fetch RequestInfo interface
   */
  protected makeFetchOptions(method: ApiHttpMethod, reqOptions: ApiFilledOptions): RequestInit {
    const options: RequestInit = {
      method,
      headers: new Headers(),
    };

    // populate body by content specific headers and data conversions if method is not GET
    if (method !== ApiHttpMethod.GET) {
      switch (reqOptions.dataType) {
        case 'json': {
          options.body = JSON.stringify(reqOptions.data);
          (options.headers as Headers).append('Content-Type', 'application/json;charset=utf-8');
          break;
        }
        case 'urlencoded': {
          options.body = queryString.stringify(reqOptions.data as ApiRequestOptionsDataObject);
          (options.headers as Headers).append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
          break;
        }
        case 'form-data': {
          options.body = reqOptions.data as BodyInit;
          (options.headers as Headers).append(
            'Content-Type',
            `multipart/form-data;boundary=${Api.generateFormDataBoundary()}`,
          );
          break;
        }
        default:
          options.body = reqOptions.data as BodyInit;
      }
    }

    // merge content specific headers and user request headers
    options.headers = {
      ...options.headers,
      ...reqOptions.headers,
    };

    return options;
  }

  protected getErrorMessageFromCatch(err: unknown): string {
    return err instanceof Error ? err.message : this.serverUnknownErrorMessage;
  }

  /**
   * Get custom response message from particular status code
   */
  protected getResponseMessage(response: Response | XMLHttpRequest, statusMessages: ApiStatusMessages): string {
    for (const status in statusMessages) {
      if (Number(status) === response.status) {
        return statusMessages[status];
      }
    }

    return response.statusText || this.serverUnknownErrorMessage;
  }

  /**
   * Returns instance of ApiResponse
   */
  makeResponse<T>(payload: T, status: ApiHttpStatusCode, message: string): ApiResponse<T> {
    return {
      success: Api.isStatusSuccessful(status),
      payload,
      status,
      message,
    };
  }

  // Utility methods
  protected static isStatusSuccessful(status: ApiHttpStatusCode): boolean {
    return status >= 200 && status <= 399;
  }

  protected static generateFormDataBoundary(): string {
    return String(Math.random()).slice(2);
  }
}
