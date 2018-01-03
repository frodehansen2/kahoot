export function isTouchDevice() {
	return !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;
}
