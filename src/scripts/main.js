// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  jumpy = require('bespoke-jumpy'),
  advanced = require('bespoke-advanced'),
  loop = require('bespoke-loop'),
  ga = require('bespoke-ga'),
  analytics = require('bespoke-analytics');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('ul:not(.no-bullets).bullets li, ol:not(.no-bullets).bullets li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  jumpy(),
  advanced({}),
  loop(),
  ga({
    trackingId: 'UA-29171100-1'
  }),
  analytics(),
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

