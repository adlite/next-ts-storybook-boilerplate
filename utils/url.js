const protocolRegExp = /^(?:[a-z]+:)?\/\//i;

/**
 * Tests if passed string is an absolute URL
 * @param url {string}
 * @return {boolean}
 */
export const isAbsolute = url => protocolRegExp.test(url);

/**
 * Changes URL protocol
 * @param url {string}
 * @param protocol {string}
 * @return {string}
 */
export const changeProtocol = (url, protocol = 'http') => {
  if (isAbsolute(url)) {
    return url.replace(protocolRegExp, `${protocol}://`);
  }

  return `${protocol}://${url[0] === '/' ? url.slice(1) : url}`;
};
