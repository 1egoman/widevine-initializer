module.exports = function widevineInitializer(callback) {
  // Touch the plugins list. See https://github.com/electron/electron/issues/4519
  navigator.plugins.item();

  // Defer the callback
  setTimeout(callback, 0);
}
