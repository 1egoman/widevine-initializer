# Widevine Initializer

A plugin to initialize widevine (or any other eme plugin) in a browser.

## Background
[Electron](http://electron.atom.io) doesn't work all that well with playing drm'd music streams. Even after
you place all the proprietary decryption stuff in the right place it still is unreliable.

A [github issue](https://github.com/electron/electron/issues/4519) I looked at when trying to figure
this out suggested a workaround to initialize widevine. This package is that workaround in an
easy-to-use form.

## Usage
```javascript
require('widevine-initializer')(function() {
  // now widevine should be initialized.
});
```
