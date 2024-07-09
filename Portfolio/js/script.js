

// =============== Aside ================================
const nav = document.querySelector(".nav"),
	navList = nav.querySelectorAll("li"),
	totalNavList = navList.length,
	allSection = document.querySelectorAll(".section"),
	totalSection = allSection.length;

const aside = document.querySelector(".aside");
const navTogglerBtn = document.querySelector(".nav-toggler");

for (let i = 0; i < totalNavList; i++) {
	const a = navList[i].querySelector("a");
	a.addEventListener("click", function () {
		removeBackSection();

		if (aside.classNameList.contains("open")) {
			aside.classNameList.remove("open");
			navTogglerBtn.classNameList.remove("open");
		}

		for (let j = 0; j < totalNavList; j++) {
			if (navList[j].querySelector("a").classNameList.contains("active")) {
				addBackSection(j);
				// allSection[j].classNameList.add("back-section");
			}
			navList[j].querySelector("a").classNameList.remove("active");
		}
		this.classNameList.add("active");
		showSection(this);
	});
}

function updateNav(element) {
	for (let i = 0; i < totalNavList; i++) {
		navList[i].querySelector("a").classNameList.remove("active");
		const target = element.getAttribute("href").split("#")[1];
		if (
			target ===
			navList[i].querySelector("a").getAttribute("href").split("#")[1]
		) {
			navList[i].querySelector("a").classNameList.add("active");
		}
	}
}

function removeBackSection() {
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classNameList.remove("back-section");
	}
}

function addBackSection(num) {
	allSection[num].classNameList.add("back-section");
}

document.querySelector(".hire-me").addEventListener("click", function () {
	const sectionIndex = this.getAttribute("data-section-index");
	showSection(this);
	updateNav(this);
	addBackSection(sectionIndex);
});

function showSection(element) {
	for (let i = 0; i < totalSection; i++) {
		allSection[i].classNameList.remove("active");
	}
	const target = element.getAttribute("href").split("#")[1];
	document.querySelector("#" + target).classNameList.add("active");
}

navTogglerBtn.addEventListener("click", () => {
	asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
	aside.classNameList.toggle("open");
	navTogglerBtn.classNameList.toggle("open");
}
