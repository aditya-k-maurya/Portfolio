"use client";
import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

function Hero({section,backSection}:any) {
	return (
		<div
			className={`home section ${section === "home" ? "active" : ""} ${
				backSection === "home" ? "back-section" : ""
			}`}
			id="home">
			<div className="container home-container">
				<div className="row hero-flex">
					<div className="home-info padd-15">
						<h3 className="hello">
							<span className="name">Aditya </span>Maurya
						</h3>
						<h3 className="my-profession">
							I&apos;m a{" "}
							<span className="typing">
								<Typewriter
									words={[
										"Web Developer",
										"Graphics Designer",
										"Competitive Programmer",
										"Awesome",
									]}
									loop={0}
									typeSpeed={80}
									deleteSpeed={60}
									delaySpeed={600}
								/>
								<Cursor />
							</span>
						</h3>
						<p>
							Hey, I&apos;m a Web Developer with extensive experience for over a
							year. My expertise is to create websites, play with designs and
							many more...
						</p>
						<a
							href="/assets/resume.pdf"
							download="aditya_resume.pdf"
							className="btn ">
							Resume 
						</a>
					</div>

					<div className="home-img padd-15">
						<img src="/assets/profile-im.png" alt="profile" />
						{/* Adjust image path */}
					</div>
				</div>
			</div>
			<div className="home-design">Codeologist</div>
		</div>
	);
}

export default Hero;
