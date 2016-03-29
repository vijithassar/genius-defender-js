'use strict';

var string;

string = function(text) {
  var characters,
      character,
      wrench,
      wrench_count,
      wrenches,
      scrambled_text;
  characters = text.split('');
  scrambled_text = '';
  wrench = '&#8291;';
  for (var i = 0, _len = characters.length; i < _len; i++) {
    character = characters[i];
    wrenches = '';
    wrench_count = Math.round(Math.random() * 10);
    for (var j = 0; j < wrench_count; j++) {
      wrenches += wrench;
    }
    scrambled_text = scrambled_text + character + wrenches;
  }
  return scrambled_text;
};

module.exports = {
  string: string
};
