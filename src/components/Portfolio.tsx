"use client";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import { portfolioData } from "../../public/data/portfolioData";

function Portfolio({ section, backSection }: any) {
	return (
		<section
			className={`portfolio section ${
				section === "portfolio" ? "active" : ""
			} ${backSection === "portfolio" ? "back-section" : ""}`}
			id="portfolio">
			<div className="container">
				<div className="row">
					<div className="section-title padd-15">
						<h2>Portfolio</h2>
						<div className="animate-gif">
							<img
								className="wow-reaction"
								src="assets/wow-reaction-unscreen.gif"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="portfolio-heading padd-15">
						<h2>My last project:</h2>
					</div>
				</div>

				<div className="row">
					{/* <!-- ===== Portfolio item ====== --> */}
					{portfolioData.map((data) => (
						<div className="portfolio-item padd-15">
							<PortfolioItem data={data} key={data.id} />
						</div>
					))}
				</div>

				<div className="row">
					<div className="portfolio-heading padd-15">
						<h2>Some Fun Projects:</h2>
					</div>
				</div>

				<div className="row">
					{/* <!-- ===== Portfolio item ====== --> */}
					<div className="portfolio-item padd-15">
						<div className="portfolio-item-inner shadow-dark">
							<a
								href="https://aditya-k-maurya.vercel.app/#home"
								className="portfolio-img">
								<img src="assets/portfolio-img.png" alt="" />
							</a>
							<div className="portfolio-item-content">
								<h2 className="portfolio-item-heading">Hangman</h2>
								<ul className="portfolio-item-tags">
									<li className="portfolio-tag-main">TypeScript</li>
									<li>Reactjs</li>
									<li>tailwind</li>
									<li>css</li>
								</ul>

								<div className="portfolio-item-description">
									Hangman a word guess game before the man hangs.
								</div>

								<a className="portfolio-item-btn">Repositery</a>
							</div>
						</div>
					</div>

					<div className="portfolio-item padd-15">
						<div className="portfolio-item-inner shadow-dark">
							<a
								href="https://aditya-k-maurya.github.io/tour-booking"
								target="_blank"
								className="portfolio-img">
								<img src="assets/tourism.png" alt="" />
							</a>
							<div className="portfolio-item-content">
								<h2 className="portfolio-item-heading">Drumkit</h2>
								<ul className="portfolio-item-tags">
									<li className="portfolio-tag-main">Javascript</li>
									<li>html</li>
									<li>css</li>
								</ul>

								<div className="portfolio-item-description">
									Play musics to and create music as you want.
								</div>

								<a className="portfolio-item-btn">Repositery</a>
							</div>
						</div>
					</div>

					<div className="portfolio-item padd-15">
						<div className="portfolio-item-inner shadow-dark">
							<a
								href="https://aditya-react-projects.vercel.app/"
								target="_blank"
								className="portfolio-img">
								<img src="assets/reactproj.png" alt="" />
							</a>
							<div className="portfolio-item-content">
								<h2 className="portfolio-item-heading">React prjects</h2>
								<ul className="portfolio-item-tags">
									<li className="portfolio-tag-main">reactjs</li>
									<li>javascript</li>
									<li>CSS</li>
									<li>redux</li>
									<li>api-handling</li>
									<li>hooks</li>
									<li>tailwind</li>
								</ul>

								<div className="portfolio-item-description">
									It contain multipe mini projects which I created to while
									learning react or whenever I feel like to create something.
								</div>

								<a className="portfolio-item-btn">Repositery</a>
							</div>
						</div>
					</div>

					<div className="portfolio-item padd-15">
						<div className="portfolio-item-inner shadow-dark">
							<a
								href="https://aditya-k-maurya.github.io/Techsnap-main/timeline"
								target="_blank"
								className="portfolio-img">
								<img src="assets/techsnap.png" alt="" />
							</a>
							<div className="portfolio-item-content">
								<h2 className="portfolio-item-heading">Techsnap frontend</h2>
								<ul className="portfolio-item-tags">
									<li className="portfolio-tag-main">frontend</li>
									<li>html</li>
									<li>CSS</li>
									<li>javascript</li>
								</ul>

								<div className="portfolio-item-description">
									Fully responsive Techsnap new website frontend. Made during my
									internship at Techsnap.
								</div>

								<a className="portfolio-item-btn">Repositery</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
