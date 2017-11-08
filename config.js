const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('********');
    console.info(message);
    console.info('********');
};

export default {
    port: env.PORT || 16031,
    host: env.HOST || '127.0.0.1',
    get serverURL() {
      return `http://127.0.0.1:8083`;
    }
};
