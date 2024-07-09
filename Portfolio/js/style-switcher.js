//  ============== toggle style switcher ============

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
	styleSwitcher.classNameList.toggle("open");
});

// ================ hide style switcher on scroll ===================
window.addEventListener("scroll", () => {
	if (styleSwitcher.classNameList.contains("open")) {
		styleSwitcher.classNameList.remove("open");
	}
});

//================ theme colors ================

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
	alternateStyles.forEach((style) => {
		if (color === style.getAttribute("title")) {
			style.removeAttribute("disabled");
		} else {
			style.setAttribute("disabled", "true");
		}
	});
}

// ================== theme light and dark mode ==============
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
	dayNight.querySelector("i").classNameList.toggle("fa-sun");
	dayNight.querySelector("i").classNameList.toggle("fa-moon");
	document.body.classNameList.toggle("dark");
});
window.addEventListener("load", () => {
	if (document.body.classNameList.contains("dark")) {
		dayNight.querySelector("i").classNameList.add("fa-sun");
	} else {
		dayNight.querySelector("i").classNameList.add("fa-moon");
	}
});
