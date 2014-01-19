var langFs = require('derby-lang-fs')
  , path = require('path');

module.exports = function (app, options) {
  return function () {
    app.use(langFs({
      directory: path.resolve(__dirname, '../locale'),
      prefix: 'validate.user'
    }));

    return function (req, res, next) {
      next();
    };
  };
};