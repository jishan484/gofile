// ----------All global variables ----------
var _current_page = 1;
var _current_folder = "/home";
var _a = "DEMOKEY";
var isToastActive = false;



function _getToken() { for (var c = "", d = 0; c += String.fromCharCode(Math.floor(91 * Math.random()) + 33), d < 7; d++); var e = a(c, _a); return c + " " + e } function a(e, f) { var d, i, g, c = 0, h = ""; if (0 == e.length) return c; for (d = 0, g = e.length; d < g; d++)c = (c << 5) - c + e.charCodeAt(d) ^ f.charCodeAt(d % f.length), c |= 0, h += c.toString(16); return b(h, f) } function b(d, e, g, c) { var f = ""; for (c = d.length - 1; c >= 0; c--)f += ((d.charCodeAt(c) + d.charCodeAt(g - c - 1) | 0) ^ e.charCodeAt(c % e.length)).toString(16); return f }