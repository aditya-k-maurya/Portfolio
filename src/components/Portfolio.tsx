"use client";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import {
	portfolioData,
	portfolioFunData,
} from "../../public/data/portfolioData";

function Portfolio({ section, backSection,theme }: any) {
	return (
		<section
			className={`portfolio section ${
				section === "portfolio" ? "active" : ""
			} ${backSection === "portfolio" ? "back-section" : ""} ${
				theme === "dark" ? "bg-grid-white/[0.06]" : "bg-grid-black/[0.06]"
			}`}
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
						<div key={data.id} className="portfolio-item padd-15">
							<PortfolioItem data={data} />
						</div>
					))}
				</div>

				<div className="row mt-8">
					<div className="portfolio-heading padd-15">
						<h2>Some Fun Projects:</h2>
					</div>
				</div>

				<div className="row">
					{/* <!-- ===== Portfolio item ====== --> */}
					{portfolioFunData.map((data) => (
						<div key={data.id} className="portfolio-item padd-15">
							<PortfolioItem data={data} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
