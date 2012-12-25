// code to inject
var actualCode = [
	'Function.prototype.clone=function(){var e=this;var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype;for(property in e){if(e.hasOwnProperty(property)&&property!=="prototype"){t[property]=e[property]}}return t};',
	'var OriginalHoverMenu = window.HoverMenu.prototype.doShow.clone();',
	'window.HoverMenu.prototype.doShow = function () {',
	'	if (this.cname !== "hover_menu")',
	'		OriginalHoverMenu.call(this);',
	'};'
].join('\n');

// inject the code
var script = document.createElement('script');
script.textContent = actualCode;
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);