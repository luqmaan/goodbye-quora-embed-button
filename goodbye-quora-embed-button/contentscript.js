var quote_buttons = Array.prototype.slice.call(document.getElementsByClassName('quote-button'))
quote_buttons.forEach(function(el) {
	el.style.display = "none"
})
var quote_hover_menus = Array.prototype.slice.call(document.getElementsByClassName('quote-hover-menu'))
quote_hover_menus.forEach(function(el) {
	el.style.width = "0px"	
})