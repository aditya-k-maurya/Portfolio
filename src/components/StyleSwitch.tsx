'use client'
import React, { useEffect } from "react";
import { useMode } from "@/context/ModeContext";

const updateIconStyles = (mode: string) => {
	const icons = document.getElementsByClassName(
		"fa-icon"
	) as HTMLCollectionOf<HTMLElement>;
	for (let i = 0; i < icons.length; i++) {
		icons[i].style.filter = mode === "dark" ? "invert(100%)" : "none";
	}
};

function StyleSwitch() {

	const { toggleMode,mode } = useMode();
	function handleClick() {

		const styleSwitcher = document.querySelector(".style-switcher");

		styleSwitcher?.classList.toggle("open");
	}

	useEffect(() => {
		updateIconStyles(mode)
	},[mode])


	return (
		<div className="style-switcher">
			<div className="style-switcher-toggler s-icon" onClick={handleClick}>
				<img
					className="w-[20px] animate-spin-slow fa-icon"
					src="/icon/gear-solid.svg"
					alt=""
				/>
			</div>

			<div className="day-night s-icon" onClick={toggleMode}>
				<img className="w-[20px] fa-icon" src="/icon/sun-solid.svg" alt="" />
			</div>

			<h4>Theme Colors</h4>
			<div className="colors">
				<span className="color-1"></span>
				<span className="color-2"></span>
				<span className="color-3"></span>
				<span className="color-4"></span>
				<span className="color-5"></span>
			</div>
		</div>
	);
}

export default StyleSwitch;
