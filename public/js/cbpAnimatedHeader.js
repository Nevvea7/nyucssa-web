/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			***REMOVED***
		***REMOVED***, false );
	***REMOVED***

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
		***REMOVED***
		else {
			classie.remove( header, 'navbar-shrink' );
		***REMOVED***
		didScroll = false;
	***REMOVED***

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	***REMOVED***

	init();

***REMOVED***)();