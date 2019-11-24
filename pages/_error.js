import React from 'react';
import PropTypes from 'prop-types';

/**
 * Basic error page overwrite
 * @see https://nextjs.org/docs#custom-error-handling
 */
const Error = ({statusCode}) => {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
};

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {statusCode};
};

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default Error;
