"use client";
import React from "react";

function Hobbies({section,backSection}:any) {
	return (
		<div
			className={`hobbies section ${section === "hobbies" ? "active" : ""} ${
				backSection === "hobbies" ? "back-section" : ""
			}`}
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
								It is often said that a book is the pathway to live hundred
								lives in one. I have read multipe books and explored wide range
								of genre which includes self-help, finance, mythology,
								biographies and fictions.
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
							<h2>Competitive programming</h2>
							<p>
								One thing learned from Competitive programming is that you
								can&apos;t learn to code unless you start using your own brain
								to reach the solution. Currently holding 1600+ rating on
								Codechef and progressively improving.
							</p>
						</div>
						<div className="hobbie-img">
							<img
								src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXBldGl0aXZlJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
								alt=""
							/>
						</div>
					</div>

					<div className="hobbie-item padd-15">
						<div className="hobbie-text">
							<h2>Competitive Typist</h2>
							<p>
								Started with a curiosity of how cool it would be if you can type
								at the speed at you think. Now currently holding average speed
								of 60wpm.
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
					</div>

					<div className="hobbie-item reverse padd-15">
						<div className="hobbie-text">
							<h2>Fitness Freak</h2>
							<p>
								As born in defence family I understood the value of health from
								a very young age. I genuenly enjoy and keep myself constantly
								engage in sports and athelitics.
							</p>
						</div>
						<div className="hobbie-img">
							<img
								src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
								alt=""
							/>
						</div>
					</div>

					<div className="hobbie-item padd-15">
						<div className="hobbie-text">
							<h2>Wanderer</h2>
							<p>
								One of the beauty of India is its diverse culture. I consider
								myself fortunate enough to experience different lifeforms in
								single country. Ganesh chathurthi of Maharastra, bihu of Assam,
								holi in UP and rhythm of life within the defence cantt are some
								unforgettable experiences.
							</p>
						</div>
						<div className="hobbie-img">
							<img
								src="https://images.unsplash.com/photo-1504732099162-d8c9d5ba3bfd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbGxlcnxlbnwwfHwwfHx8MA%3D%3D"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hobbies;
