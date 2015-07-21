var path = require('path');
var extend = require('util')._extend;

var development = require('./env/development');
var production = require('./env/production');

var defaults = {
	root: path.join(__dirname, '..')
***REMOVED***;

***REMOVED***
	development: extend(development, defaults),
	production: extend(production, defaults)
***REMOVED***[process.env.NODE_ENV || 'development'];