var app_preloader = (function () {

	var animatedFadeClassName = 'b-loading_type_animate',
			hiddenClassName = 'b-loading_viewtype_hidden',
			findSelector = '.b-loading';

	function findElement(obj) {
		if (!(obj instanceof jQuery)) {
			obj = $(obj);
		}
		return obj.closest(findSelector);
	}

	function enabled(obj) {
		obj = findElement(obj);

		obj.removeClass(animatedFadeClassName).removeClass(hiddenClassName);
	}

	function disable(obj) {
		obj = findElement(obj);

		findElement(obj).addClass(animatedFadeClassName);

		setTimeout(function () {
			obj.addClass(hiddenClassName);
		}, 400);
	}

	return {
		enabled: enabled,
		disable: disable
	};
})();
