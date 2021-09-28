const protocolRegExp = /^(?:[a-z]+:)?\/\//i;

/**
 * Tests if passed string is an absolute URL
 */
export const isAbsolute = (url: string): boolean => protocolRegExp.test(url);

/**
 * Changes URL protocol
 */
export const changeProtocol = (url: string, protocol: 'http' | 'https' = 'http'): string => {
  if (isAbsolute(url)) {
    return url.replace(protocolRegExp, `${protocol}://`);
  }

  return `${protocol}://${url[0] === '/' ? url.slice(1) : url}`;
};

/**
 * Concatenate absolute and relative link to one string
 */
export const concatLinks = (baseLink: string, relativeLink: string): string => {
  if (typeof baseLink !== 'string' || typeof relativeLink !== 'string') {
    return '';
  }

  const baseLinkHasSlash = baseLink.slice(-1) === '/';
  const relativeLinkHasSlash = relativeLink[0] === '/';
  const concatedBaseLink = baseLink.slice(0, baseLink.length - 1);
  const concatedRelativeLink = relativeLink.slice(1);

  if (baseLinkHasSlash && relativeLinkHasSlash) {
    return `${concatedBaseLink}/${concatedRelativeLink}`;
  }

  if (baseLinkHasSlash && !relativeLinkHasSlash) {
    return `${concatedBaseLink}/${relativeLink}`;
  }

  if (!baseLinkHasSlash && relativeLinkHasSlash) {
    return `${baseLink}/${concatedRelativeLink}`;
  }

  return `${baseLink}/${relativeLink}`;
};
