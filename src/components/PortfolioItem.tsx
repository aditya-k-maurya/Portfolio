import React from "react";

function PortfolioItem() {
	return (
		<div className="portfolio-item-inner shadow-dark">
			<a
				href="https://aditya-k-maurya.vercel.app/#home"
				className="portfolio-img">
				<img src="assets/portfolio-img.png" alt="" />
			</a>
			<div className="portfolio-item-content">
				<h2 className="portfolio-item-heading">Portfolio</h2>
				<ul className="portfolio-item-tags">
					<li className="portfolio-tag-main">Portfolio</li>
					<li>javascript</li>
					<li>html</li>
					<li>css</li>
					<li>typed.js</li>
				</ul>

				<div className="portfolio-item-description">
					This is the current portfolio website to showcase my works. Made with
					blend of creativity and skills.
				</div>

				<a className="portfolio-item-btn">Repositery</a>
			</div>
		</div>
	);
}

export default PortfolioItem;
