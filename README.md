# Genius Defender

This is an extremely minimalist JavaScript port of [Genius Defender](http://github.com/vijithassar/genius-defender),
a text processing tool which obfuscates text and makes it impossible for [Genius.com](http://genius.com) annotations to parse.

# Very Important Questions

Please review the extensive [release notes](http://www.vijithassar.com/2461/how-to-block-genius-annotations).

# Usage

First, place the contents of this repository inside your project's node_modules/ directory.

```js
// require the module
var scrambler = require('genius-defender');
// scramble a string containing Unicode text characters
var scrambled_text = scrambler.string(text);
```

# Notes

The JavaScript version of this tool differs in a couple key ways from the original [PHP version](http://github.com/vijithassar/genius-defender):

- Because Node does not have a distribution case remotely comparable to WordPress, this version provides only the core string processing method. There's really no need for an HTML processing method, because recursively walking through DOM elements is trivial in JavaScript, and likely better handled by your favorite library anyway.
- It obviously still requires UTF-8 text encoding in order to inject the extra characters, but it does not actually verify the encoding before processing the input, because that would add an unnecessary dependency. There are a number of modules you can use to implement that check yourself if desired.

For now, this is provided as a simple CommonJS module intended for Node because it's better to do the text obfuscation server-side instead of client-side, but it may be converted to an ES6 module in the future.
