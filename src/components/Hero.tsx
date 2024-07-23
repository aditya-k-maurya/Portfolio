"use client";
import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { SparklesCore } from "./ui/sparkles";

function Hero({section,backSection,theme}:any) {
	return (
		<div
			className={`home section ${section === "home" ? "active" : ""} ${
				backSection === "home" ? "back-section" : ""
			}`}
			id="home">
			<SparklesCore
				id="tsparticlesfullpage"
				background="transparent"
				minSize={0.6}
				maxSize={1.4}
				particleDensity={100}
				className="w-full h-full absolute"
				particleColor={theme === "dark" ? "#ffffff" : "#636363"}
			/>
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
							Hello, I&apos;m a guy who believes in work is workship, the more you work the more you realize the more you can work.
						</p>
						<a
							href="/assets/resume.pdf"
							download="aditya_resume.pdf"
							className="btn ">
							Resume{" "}
							<img
								className="w-[18px] inline invert ml-2"
								src="/icon/download-solid.svg"
							/>
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
