(function() {
window["JST"] = window["JST"] || {};

window["JST"]["maps-location-list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n';
 _.each(data, function(location, i) { ;
__p += '\r\n    <li class="location-list-item" data-item-value="' +
((__t = ( i )) == null ? '' : __t) +
'">\r\n        <i class="icon-flag"><img src="' +
((__t = ( location.property.type === 'internal' ? internalIcon : externalIcon )) == null ? '' : __t) +
'"></i>\r\n        <p class="location-name" data-attr-label="Name"><a href="#" data-location-lat="' +
((__t = ( location.coords.lat )) == null ? '' : __t) +
'" data-location-lng="' +
((__t = ( location.coords.long )) == null ? '' : __t) +
'">' +
((__t = ( location.property.name )) == null ? '' : __t) +
'</a></p>\r\n        <p class="location-address" data-attr-label="Address">' +
((__t = ( location.property.address )) == null ? '' : __t) +
'</p>\r\n        <p class="location-url"  data-attr-label="Website">\r\n            <a class="location-url" href="' +
((__t = ( location.property.url )) == null ? '' : __t) +
'" target="_blank">' +
((__t = ( location.property.url )) == null ? '' : __t) +
'</a>\r\n        </p>\r\n        <p class="location-directions" data-attr-label="Get Directions">\r\n            <a class="location-directions" href="https://www.google.com/maps/dir/?api=1&destination=' +
((__t = ( location.coords.lat )) == null ? '' : __t) +
',' +
((__t = ( location.coords.long )) == null ? '' : __t) +
'" target="_blank"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>Get directions</a>\r\n        </p>\r\n    </li>\r\n';
 }) ;
__p += '\r\n</ul> ';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["video-playlist-main.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(data, function(vid, i) { ;
__p += '\r\n<div class="item carousel-item ' +
((__t = ( i == 0 ? 'active' : 'none' )) == null ? '' : __t) +
'" data-slide-number="' +
((__t = ( i )) == null ? '' : __t) +
'">\r\n    <div class="video-wrapper video-wrapper-item" data-youTubeId="' +
((__t = ( vid.id )) == null ? '' : __t) +
'">\r\n        <div class="video-player" id="ytPlayer' +
((__t = ( i + 1 )) == null ? '' : __t) +
'"></div>\r\n        <div class="video-poster" style="background-image:url(' +
((__t = ( vid.image )) == null ? '' : __t) +
')">\r\n            <div class="video-player-content">\r\n                <h2 class="video-title">' +
((__t = ( vid.title )) == null ? '' : __t) +
'</h2>\r\n                <p class="video-duration">Loading duration...</p>\r\n                <a href="#" class="btn btn-play"><i class="fa fa-play-circle" aria-hidden="true"></i>Play</a>\r\n            </div>\r\n        </div>\r\n        <div class="loading-div"></div>\r\n    </div>\r\n</div>\r\n';
 }) ;


}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["video-playlist-thumbs.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(data, function(vid, i) { ;
__p += '\r\n    <li class="list-inline-item ' +
((__t = ( i == 0 ? 'active' : ' ' )) == null ? '' : __t) +
'"  data-main-container-id="ytPlayer' +
((__t = ( i + 1 )) == null ? '' : __t) +
'" id="ytPlayer' +
((__t = ( i + 1 )) == null ? '' : __t) +
'-thumb">\r\n        <a id="carousel-selector-' +
((__t = ( i + 1 )) == null ? '' : __t) +
'" data-slide-to="' +
((__t = ( i )) == null ? '' : __t) +
'" data-target="#playerCarousel">\r\n            <div class="video-item__image">\r\n                <img src="' +
((__t = ( vid.image )) == null ? '' : __t) +
'" alt="" class="video-poster">\r\n            </div>\r\n            <div class="video-item__content">\r\n                <span class="video-title">\r\n                    ' +
((__t = ( vid.title )) == null ? '' : __t) +
'\r\n                </span>\r\n                <span class="video-action">\r\n                    Play\r\n                </span>\r\n            </div> \r\n        </a>\r\n    </li>\r\n';
 }) ;


}
return __p
}})();