"use client";
import React from "react";
import "./css/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
	const pathname = usePathname();
	return (
		<>
			<div className="nav-toggler">
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
								className="w-[16px] inline mr-[8px]"
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
								className="w-[14px] inline mr-[8px]"
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
								className="w-[14px] inline mr-[8px]"
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
								className="w-[14px] inline mr-[8px]"
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
								className="w-[14px] inline mr-[8px]"
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
