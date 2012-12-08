var actualCode = [
	'window.HoverMenu.prototype.doShow = function () {};'].join('\n');

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);