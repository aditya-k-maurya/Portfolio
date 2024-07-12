import React from "react";

type Data = {
	id: number;
	title: string;
	description: string;
	tagMain: string;
	tags: string[];
	image: string;
	repository: string;
	status: string;
};

type Props = {
	data: Data;
};

const PortfolioItem: React.FC<Props> = ({ data }) => {
	return (
		<div className="portfolio-item-inner shadow-dark">
			<a
				href="https://aditya-k-maurya.vercel.app/#home"
				className="portfolio-img">
				<img src={data.image} alt="" />
			</a>
			<div className="portfolio-item-content">
				<h2 className="portfolio-item-heading">{data.title}</h2>
				<ul className="portfolio-item-tags">
					<li className="portfolio-tag-main">{data.tagMain}</li>
					{data.tags?.map((item: string, index: number) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<div className="portfolio-item-description">{data.description}</div>
				<a className="portfolio-item-btn" href={data.repository}>
					Repository
				</a>
			</div>
		</div>
	);
};

export default PortfolioItem;
