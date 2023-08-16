const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API_URL: 'http://localhost:3000',
        NEXT_PUBLIC_MAP_KEY: '2w10t5vf0w',
      },

      images: {
        domains: ['res.cloudinary.com'],
      },
    };
  }

  return {
    env: {
      API_URL: 'https://www.centralamc24.com',
      NEXT_PUBLIC_MAP_KEY: '2w10t5vf0w',
    },
  };
};
