"use client";
import React from "react";

function Hobbies({section,backSection}:any) {
	return (
		<div
			className={`hobbies section ${section === "hobbies" ? "active" : ""} ${
				backSection === "hobbies" ? "back-section" : ""
			} `}
			id="hobbies">
			<div className="container">
				<div className="row">
					<div className="section-title padd-15">
						<h2>Hobbies</h2>
						<div className="animate-gif">
							<img className="dancing-hen" src="assets/studhen-unscreen.gif" />
						</div>
					</div>
				</div>

				<div className="row hobbies-container">
					<div className="hobbie-item padd-15">
						<div className="hobbie-text">
							<h2>Reading</h2>
							<p>
								It is often said that a book is the pathway to live a hundred
								lives in one. I have read multiple books across a wide range of
								genres — self-help, finance, mythology, biographies, and fiction.
							</p>
						</div>
						<div className="hobbie-img">
							<img
								src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
								alt=""
							/>
						</div>
					</div>
					<div className="hobbie-item reverse padd-15">
						<div className="hobbie-text">
							<h2>Competitive Programming</h2>
							<p>
								Competitive programming taught me that you can&apos;t truly learn
								to code until you train your brain to think through problems
								independently. Currently holding a 1600+ rating on CodeChef and
								steadily climbing.
							</p>
						</div>
						<div className="hobbie-img">
							<img
								src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXBldGl0aXZlJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
								alt=""
							/>
						</div>
					</div>

					{/* <div className="hobbie-item padd-15">
						<div className="hobbie-text">
							<h2>Competitive Typist</h2>
							<p>
								It started with a curiosity — how cool would it be to type as
								fast as you think? That curiosity turned into a habit. Currently
								averaging 60 WPM and always pushing for more.
							</p>
						</div>
						<div className="hobbie-img">
							<a
								href="https://data.typeracer.com/pit/profile?user=aditya1003&ref=badge"
								target="_top">
								<img
									src="https://data.typeracer.com/misc/badge?user=aditya1003"
									alt="TypeRacer.com scorecard for user aditya1003"
								/>
							</a>
						</div>
					</div> */}

					<div className="hobbie-item reverse padd-15">
=						<div className="hobbie-img">
							<img
								src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
								alt=""
							/>
						</div>
						<div className="hobbie-text">
							<h2>Fitness Freak</h2>
							<p>
								Growing up in a defence family taught me the value of health from
								an early age. I genuinely enjoy staying active and keep myself
								regularly engaged in sports and athletics.
							</p>
						</div>
					</div>

					<div className="hobbie-item padd-15">
						<div className="hobbie-img">
							<img
								src="https://images.unsplash.com/photo-1504732099162-d8c9d5ba3bfd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbGxlcnxlbnwwfHwwfHx8MA%3D%3D"
								alt=""
							/>
						</div>
						<div className="hobbie-text">
							<h2>Wanderer</h2>
							<p>
								One of the beauties of India is its incredible diversity. I feel
								fortunate to have experienced so many different cultures within a
								single country — Ganesh Chaturthi in Maharashtra, Bihu in Assam,
								Holi in UP, and the unique rhythm of life within a defence
								cantonment.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hobbies;
