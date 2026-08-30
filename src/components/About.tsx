"use client";
import React from "react";
import { useActiveSection } from "@/context/ActiveSectionContext";

function About({ section, backSection }: any) {
	const {setActiveSection,setBackSection} = useActiveSection()
	return (
		<div
			className={` about section ${section === "about" ? "active" : ""} ${
				backSection === "about" ? "back-section" : ""
			}`}
			id="about">
			<div className="container">
				<div className="row">
					<div className="section-title padd-15">
						<h2>About Me</h2>
						<div className="animate-gif">
							<img className="chill-cat" src="assets/cat-vibe.gif" alt="gif" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="about-content padd-15">
						<div className="row flex-nowrap justify-between mb-4">
							<div className="about-text padd-15">
								{/* <h3>
									I&apos;m a {" "}
									<span>Full Stack Developer</span>
								</h3> */}
								<p>
									I live by the philosophy{" "}
									<strong>&quot;stay hungry, stay foolish&quot;</strong> — always
									curious, always growing. I believe in staying open to new
									experiences and pushing my boundaries with every project. My
									goal is to build things that{" "}
									<strong>
										create real impact and genuinely connect with people
									</strong>
									.
								</p>
							</div>
							{/* <div className="float-img">
								<img src="/assets/profileimg2.png" alt="profile" />{" "}
							</div> */}
						</div>

						<div className="row">
							<div className="personal-info padd-15">
								{/* <div className="row info-container">
									<div className="info-item padd-15">
										<p>
											Birthday : <span>10 March 2003</span>
										</p>
									</div>

									<div className="info-item padd-15">
										<p>
											Age : <span>23</span>
										</p>
									</div>

									<div className="info-item padd-15">
										<p>
											Email : <span>aditya.maurya.1003@gmail.com</span>
										</p>
									</div>

									<div className="info-item padd-15">
										<p>
											Degree : <span>Btech CSE</span>
										</p>
									</div>

									<div className="info-item padd-15">
										<p>
											Phone : <span>+919310736071</span>
										</p>
									</div>

									<div className="info-item padd-15">
										<p>
											Freelance : <span>Available</span>
										</p>
									</div>
								</div> */}
								{/* <div className="row">
									<div className="buttons padd-15">
										<a
											href="#contact"
											className="btn hire-me"
											data-section-index="1"
											onClick={() => {
												setBackSection("about");
												setActiveSection("contact");
											}}>
											Hire me
										</a>
									</div>
								</div> */}
							</div>

							<div className=" padd-15">
								{/* <!-- <h2>Skills</h2> --> */}
								<ul className="skill-list">
									<li>JavaScript</li>
									<li>TypeScript</li>
									<li>C++</li>
									<li>HTML</li>
									<li>CSS</li>
									<li>Node.js</li>
									<li>Next.js</li>
									<li>React.js</li>
									<li>Express.js</li>
									<li>MongoDB</li>
									<li>PostgreSQL</li>
									<li>MySQL</li>
									<li>Tailwind CSS</li>
									<li>Kafka</li>
									<li>Redis</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-8">
					<div className="experience padd-15">
						<h3 className="title">Experience</h3>
						<div className="row">
							<div className="timeline-box padd-15">
								<div className="timeline dark-shadow">
									{/* ======== timeline item ==========  */}
									<div className="timeline-item">
										<div className="circle-dot"></div>
										<h3 className="timeline-date">
											<i className="fa fa-calendar"></i> Jan 2025 - Present
										</h3>
										<h4 className="timeline-title">
											Junior Associate Software Engineer @Unthinkable Solutions
										</h4>
										<p className="timeline-text">
											Building and maintaining scalable and distributed systems, focusing on backend development and system design. Collaborating with cross-functional teams to deliver high-quality software solutions.
										</p>
									</div>

									{/* ======== timeline item ==========  */}
									<div className="timeline-item">
										<div className="circle-dot"></div>
										<h3 className="timeline-date">
											<i className="fa fa-calendar"></i> April 2024 - Present
										</h3>
										<h4 className="timeline-title">Freelance Developer</h4>
										<p className="timeline-text">
											Designed and developed a website for Trenz, a Canadian
											company, handling end-to-end delivery from UI design to
											deployment.
										</p>
									</div>

									{/* ======== timeline item ==========  */}
									<div className="timeline-item">
										<div className="circle-dot"></div>
										<h3 className="timeline-date">
											<i className="fa fa-calendar"></i> Jan 2024 - Mar 2024
										</h3>
										<h4 className="timeline-title">
											Web Developer Intern @techsnap
										</h4>
										<p className="timeline-text">
											Built the frontend for EduTech platform Unstarted.in,
											developed a full Learning Management System (LMS) UI, and
											created new landing pages for Techsnap using React and
											modern CSS frameworks.
										</p>
									</div>

									{/* <div className="timeline-item">
												<div className="circle-dot"></div>
												<h3 className="timeline-date">
													<i className="fa fa-calendar"></i> 2020 -2021
												</h3>
												<h4 className="timeline-title">
													Master in Computer Sciennce
												</h4>
												<p className="timeline-text">
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Iusto, aut voluptatibus, quas hic nostrum quis
													ratione a explicabo laborum voluptas vero, lib
													mollitia minima, laborum voluptatem tempora id
													numquam.
												</p>
											</div>  */}
								</div>
							</div>
						</div>
					</div>
					<div className="education padd-15">
						<h3 className="title">Education</h3>
						<div className="row">
							<div className="timeline-box padd-15">
								<div className="timeline dark-shadow">
									{/* ======== timeline item ==========  */}
									<div className="timeline-item">
										<div className="circle-dot"></div>
										<h3 className="timeline-date">
											<i className="fa fa-calendar"></i> 2021 -2025
										</h3>
										<h4 className="timeline-title">
											B.tech in Computer Science
										</h4>
										<p className="timeline-text">
											Completed B.Tech in Computer Science with a CGPA of 8.6.
											Gained strong foundations in DSA, OS, DBMS, and system
											design while building full-stack projects throughout the
											program.
										</p>
									</div>

									{/* <div className="timeline-item">
										<div className="circle-dot"></div>
										<h3 className="timeline-date">
											<i className="fa fa-calendar"></i> 2019- 2020
										</h3>
										<h4 className="timeline-title">Grade 12th</h4>
										<p className="timeline-text">
											Completed 12th from one of the prestigious school (Army
											Public School Dhaula Kuan) and scored 88% overall.
										</p>
									</div>

									<div className="timeline-item">
										<div className="circle-dot"></div>
										<h3 className="timeline-date">
											<i className="fa fa-calendar"></i> 2017-2018
										</h3>
										<h4 className="timeline-title">Grade 10th</h4>
										<p className="timeline-text">
											Completed 10th from one of the prestigious school (Army
											Public School Dhaula Kuan) and scored 89% overall.
										</p>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
