"use client";
import React, { useEffect } from "react";
import "./css/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
	const pathname = usePathname();

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
					<Link href="/">
						<span>A</span>ditya
					</Link>
				</div>

				<ul className="nav">
					<li>
						<Link href="/home" className={pathname == "/" ? "active" : ""}>
							<img
								className="w-[16px] fa-icon inline mr-[8px]"
								src="/icon/house-solid.svg"
							/>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={pathname == "/about" ? "active" : ""}>
							<img
								className="w-[14px] fa-icon inline mr-[8px]"
								src="/icon/user-solid.svg"
								alt=""
							/>
							About
						</Link>
					</li>

					<li>
						<Link
							href="/portfolio"
							className={pathname == "/portfolio" ? "active" : ""}>
							<img
								className="w-[14px] fa-icon inline mr-[8px]"
								src="/icon/briefcase-solid.svg"
								alt=""
							/>
							Portfolio
						</Link>
					</li>
					{/* <li>
						<a href="#services"><i className="fa fa-list"></i>Services</a>
					</li>  */}
					<li>
						<Link
							href="/hobbies"
							className={pathname == "/hobbies" ? "active" : ""}>
							<img
								className="w-[14px] fa-icon inline mr-[8px]"
								src="/icon/heart-solid.svg"
								alt=""
							/>
							Hobbies
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className={pathname == "/contact" ? "active" : ""}>
							<img
								className="w-[14px] fa-icon inline mr-[8px]"
								src="/icon/comment-solid.svg"
								alt=""
							/>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
