/* eslint-disable @typescript-eslint/no-var-requires */

const { application: devBucket } = require('./.ciri-upload.config.js');
const { application: debugBucket } = require('./.ciri-upload.debug.config.js');
const { application: prodBucket } = require('./.ciri-upload.prod.config.js');

const production = {
  api: 'production/api',
  cdnBucket: prodBucket,
  get cdnBucketPath() {
    return `https://biv.oss-cn-hangzhou.aliyuncs.com/${this.cdnBucket}/dist/`;
  }
};

const dev = {
  api: 'http://192.168.1.234:10999',
  cdnBucket: devBucket,
  get cdnBucketPath() {
    return `https://biv.oss-cn-hangzhou.aliyuncs.com/${this.cdnBucket}/dist/`;
  }
};
const debug = {
  api: 'http://39.98.120.120:10999',
  cdnBucket: debugBucket, // 公用测试bucket
  get cdnBucketPath() {
    return `https://biv.oss-cn-hangzhou.aliyuncs.com/${this.cdnBucket}/dist/`;
  }
};

module.exports = ((env) => {
  let config;
  switch (env) {
    case 'development': {
      config = dev;
      break;
    }
    case 'test': {
      config = production;
      break;
    }
    case 'production': {
      config = production;
      break;
    }
    case 'debug': {
      config = debug;
      break;
    }
    default: {
      config = dev;
      break;
    }
  }
  return config;
})(process.env.NODE_ENV);
