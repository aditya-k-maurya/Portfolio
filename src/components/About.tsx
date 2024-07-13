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
						<div className="row flex-nowrap justify-between">
							<div className="about-text padd-15">
								<h3>
									I&apos;m <span>Aditya</span> Kumar Maurya and
									<span>Web Developer</span>
								</h3>
								<p>
									I am guy who believes in living life with a ideology
									<strong>&quot;stay hungry, stay foolish&quot;</strong>.
									Believes in keep learning and keep yourself open to new
									experiences. At the end I want to say I want to create
									something which can bring
									<strong>
										smiles on faces and can connect with the hearts of people
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
								<div className="row info-container">
									<div className="info-item padd-15">
										<p>
											Birthday : <span>10 March 2003</span>
										</p>
									</div>

									<div className="info-item padd-15">
										<p>
											Age : <span>21</span>
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
								</div>
								<div className="row">
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
								</div>
							</div>

							<div className="skills padd-15">
								{/* <!-- <h2>Skills</h2> --> */}
								<ul className="skill-list">
									<li>Javascript</li>
									<li>Python</li>
									<li>C++</li>
									<li>TypeScript</li>
									<li>HTML</li>
									<li>CSS</li>
									<li>nodejs</li>
									<li>nextjs</li>
									<li>reactjs</li>
									<li>expressjs</li>
									<li>mongoDB</li>
									<li>Posgrese</li>
									<li>MySQL</li>
									<li>tailwind</li>
									<li>bootstrap</li>
									<li>git</li>
									<li>github</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
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
											Currently pre final year B.tech CSE student. Mastering the
											art to communicate with machines. Overall CGPA 8.6 CGPA(5
											semister).
										</p>
									</div>

									<div className="timeline-item">
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
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="experience padd-15">
						<h3 className="title">Experience</h3>
						<div className="row">
							<div className="timeline-box padd-15">
								<div className="timeline dark-shadow">
									{/* ======== timeline item ==========  */}
									<div className="timeline-item">
										<div className="circle-dot"></div>
										<h3 className="timeline-date">
											<i className="fa fa-calendar"></i> Nov 2023 - April 2024
										</h3>
										<h4 className="timeline-title">
											Web Developer Intern @techsnap
										</h4>
										<p className="timeline-text">
											Built frontend of EduTech company called Unstarted.in,
											created frontend of Learning Management System(LMS), built
											new frontend page of techsnap.
										</p>
									</div>

									{/* ======== timeline item ==========  */}
									<div className="timeline-item">
										<div className="circle-dot"></div>
										<h3 className="timeline-date">
											<i className="fa fa-calendar"></i> April 2024 - now
										</h3>
										<h4 className="timeline-title">Freelancing</h4>
										<p className="timeline-text">
											Building webpage for a canadian company called trenz.
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
				</div>
			</div>
		</div>
	);
}

export default About;
