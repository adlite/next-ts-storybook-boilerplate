const dotenv = require('dotenv');

module.exports = () => {
  const config = dotenv.config();

  if (config.error) {
    throw new Error(`".env" configuration file not found. Copy ".env.example" to ".env" file`);
  }

  return config.parsed;
};
