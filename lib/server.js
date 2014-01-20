var langFs = require('derby-lang-fs')
  , path = require('path');

module.exports = function (app, options) {
  return function () {
    app.use(langFs({
      directory: path.resolve(__dirname, '../locale')
    }));

    return function (req, res, next) {
      next();
    };
  };
};