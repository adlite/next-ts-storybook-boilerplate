// Vendor
import hoistStatics from 'hoist-non-react-statics';

/**
 * Creates pure Higher Order Component receiving HOC fabric function and its name.
 * @param fabric {Function}
 * @param name {string}
 * @returns {function(Object): Object} - A HOC with name and omitted static methods and fields
 */
export const createHoc = (fabric, name = 'withHoc') => Component => {
  if (typeof fabric !== 'function') {
    throw new TypeError('createHoc: `fabric` should be a function that returns React Component');
  }

  const childName = Component.displayName || Component.name || 'Component';
  const Hoc = fabric();
  Hoc.displayName = `${name}(${childName})`;
  Hoc.Component = Component;
  return hoistStatics(Hoc, Component);
};
