/* config-overrides.js */
const { addLessLoader } = require('customize-cra');

module.exports = function override(config, env) {
  const newConfig = addLessLoader({
    javascriptEnabled: true
  })(config, env);
  return newConfig;
};
