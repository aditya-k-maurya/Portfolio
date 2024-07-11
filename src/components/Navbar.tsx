"use client";
import React, { useEffect } from "react";
import "./css/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/context/ActiveSectionContext";

function Navbar() {
	const pathname = usePathname();
	const { activeSection, setActiveSection } = useActiveSection();
	const { setBackSection } = useActiveSection();

	function handleToggle() {
		const navToggler = document.querySelector(".nav-toggler");
		const aside = document.querySelector(".aside");

		if (aside?.classList.contains("open")) {
			aside.classList.remove("open");
			navToggler?.classList.remove("open");
		} else {
			aside?.classList.add("open");
			navToggler?.classList.add("open");
		}
	}

	function handleSection(section: string) {
		setBackSection(activeSection)
		setActiveSection(section)
	}

	useEffect(() => {
		if (window.innerWidth < 1200) {
			handleToggle();
		}
	}, [pathname]);

	return (
		<>
			<div className="nav-toggler" onClick={handleToggle}>
				<span></span>
			</div>
			<div className="aside">
				<div className="logo">
					<a href="/">
						<span>A</span>ditya
					</a>
				</div>

				<ul className="nav">
					<li>
						<a
							href="#home"
							onClick={() => {
								handleSection("home");
							}}
							className={activeSection == "home" ? "active" : ""}>
							<img
								className="w-[16px] fa-icon inline mr-[8px]"
								src="/icon/house-solid.svg"
							/>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							onClick={() => {
								handleSection("about");
							}}
							className={activeSection == "about" ? "active" : ""}>
							<img
								className="w-[14px] fa-icon inline mr-[8px]"
								src="/icon/user-solid.svg"
								alt=""
							/>
							About
						</a>
					</li>

					<li>
						<a
							href="#portfolio"
							onClick={() => {
								handleSection("portfolio");
							}}
							className={activeSection == "portfolio" ? "active" : ""}>
							<img
								className="w-[14px] fa-icon inline mr-[8px]"
								src="/icon/briefcase-solid.svg"
								alt=""
							/>
							Portfolio
						</a>
					</li>
					{/* <li>
						<a href="#services"><i className="fa fa-list"></i>Services</a>
					</li>  */}
					<li>
						<a
							href="#hobbies"
							onClick={() => {
								handleSection("hobbies");
							}}
							className={activeSection == "hobbies" ? "active" : ""}>
							<img
								className="w-[14px] fa-icon inline mr-[8px]"
								src="/icon/heart-solid.svg"
								alt=""
							/>
							Hobbies
						</a>
					</li>
					<li>
						<a
							href="#contact"
							onClick={() => {
								handleSection("contact");
							}}
							className={activeSection == "contact" ? "active" : ""}>
							<img
								className="w-[14px] fa-icon inline mr-[8px]"
								src="/icon/comment-solid.svg"
								alt=""
							/>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
