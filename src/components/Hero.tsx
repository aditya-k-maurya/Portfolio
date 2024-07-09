import React from "react";

function Hero() {
	return (
		<div className="home active section" id="home">
			<div className="container home-container">
				<div className="row">
					<div className="home-info padd-15">
						<div className="float-img">
							<img src="./assets/profileimg2.png" alt="profile" />
						</div>

						<h3 className="hello">
							<span className="name">Aditya </span>Maurya
						</h3>
						<h3 className="my-profession">
							I'm a <span className="typing"></span>
						</h3>
						<p>
							Hey, I'm a Web Developer with extensive experience for over a
							year. My expertise is to create websites, play with designs and
							many more...
						</p>
						<a
							href="assets/resume.pdf"
							download="aditya_resume.pdf"
							className="btn">
							Resume <i className="fa-solid fa-download"></i>
						</a>
					</div>

					<div className="home-img padd-15">
						<img src="./assets/profile.png" alt="profile" />
					</div>
				</div>
			</div>
			<div className="home-design">Codeologist</div>
		</div>
	);
}

export default Hero;
