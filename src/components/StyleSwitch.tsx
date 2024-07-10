'use client'
import React, { useEffect, useState } from "react";
import { useMode } from "@/context/ModeContext";

const updateIconStyles = (mode: string) => {
	const icons = document.getElementsByClassName(
		"fa-icon"
	) as HTMLCollectionOf<HTMLElement>;
	for (let i = 0; i < icons.length; i++) {
		icons[i].style.filter = mode === "dark" ? "invert(100%)" : "none";
	}
}; 


	const changeSkinColor = (skinColor:string) => {

		document.documentElement.style.setProperty("--skin-color", skinColor);
		// setSkinColor(newColor); 
	};

function StyleSwitch() {
	const { toggleMode, mode } = useMode();
	const [skinColor, setSkinColor] = useState("#1854b4"); // Initial value

	function handleClick() {
		const styleSwitcher = document.querySelector(".style-switcher");

		styleSwitcher?.classList.toggle("open");
	}

	useEffect(() => {
		updateIconStyles(mode);
	}, [mode]);

	useEffect(() => {
		changeSkinColor(skinColor)
	},[skinColor])

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
				<img
					className="w-[18px] fa-icon"
					src={mode === "dark" ? "/icon/moon-solid.svg" : "/icon/sun-solid.svg"}
					alt=""
				/>
			</div>

			<h4>Theme Colors</h4>
			<div className="colors">
				<span
					className="color-1"
					onClick={() => {
						setSkinColor("#1854b4");
					}}></span>
				<span
					className="color-2"
					onClick={() => {
						setSkinColor("#fa5b0f");
					}}></span>
				<span
					className="color-3"
					onClick={() => {
						setSkinColor("#ec1839");
					}}></span>
				<span
					className="color-4"
					onClick={() => {
						setSkinColor("#37b182");
					}}></span>
				<span
					className="color-5"
					onClick={() => {
						setSkinColor("#f021b2");
					}}></span>
			</div>
		</div>
	);
}

export default StyleSwitch;
