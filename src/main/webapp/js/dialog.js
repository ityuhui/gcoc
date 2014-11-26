/* 当前页面高度 */
function pageHeight() {
	return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
	return document.body.scrollWidth;
}

$.fn.mask = function() {

	// 参数
	var op = {
		bgcolor : '#000',
		z : 5100,
		opacity : 0.7
	};
	var position = {
		top : 0,
		left : 0
	};
	var original = $("#main");
	// 创建一个 Mask 层，追加到对象中
	var maskDiv = $('<div class="maskdivgen">&nbsp;</div>');
	maskDiv.appendTo(original);
	var maskWidth = pageWidth();
	var maskHeight = pageHeight();
	maskDiv.css({
		position : 'absolute',
		top : position.top,
		left : position.left,
		'z-index' : op.z,
		width : maskWidth,
		height : maskHeight,
		'background-color' : op.bgcolor,
		opacity : 0
	});
	maskDiv.fadeIn('fast', function() {
		// 淡入淡出效果
		$(this).fadeTo('fast', op.opacity);
	});
	return maskDiv;
}


$.fn.unmask = function() {
	var original = $("#main");
	if (this[0] && this[0] !== window.document) {
		original = $(this[0]);
	}
	original.find("> div.maskdivgen").fadeOut('fast', 0, function() {
		$(this).remove();
	});
}


$.fn.showWarningDialog = function(dialog) {

	$.fn.mask();

	dialog.css({
		"position" : "absolute",
		"left" : "50%",
		"top" : "50%",
		"margin-left" : "-250px",
		"margin-top" : "-100px",
		"border" : "solid 3px #ccc",
		"z-index" : 6000
	});
	dialog.show();
}

$.fn.hideWarningDialog = function(dialog) {
	$.fn.unmask();
	dialog.hide();
}

