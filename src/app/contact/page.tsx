import React from "react";

function page() {
	return (
		<section className="contact section" id="contact">
			<div className="container">
				<div className="row">
					<div className="section-title padd-15">
						<h2>Contact Me</h2>
						<div className="animation">
							<img
								className="dog-call"
								src="assets/dogcall-unscreen.gif"
								alt=""
							/>
						</div>
					</div>
				</div>

				<h3 className="contact-title padd-15">Have any questions?</h3>
				<h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>

				<div className="row">
					{/* <!-- ======Contact info item ======= --> */}
					<div className="contact-info-item padd-15">
						<div className="icon">
							<i className="fa fa-phone"></i>
							<h4>Call me on</h4>
							<p>+91-9310736071</p>
						</div>
					</div>

					{/* <!-- ======Contact info item ======= --> */}
					<div className="contact-info-item padd-15">
						<div className="icon">
							<i className="fa fa-map-marker-alt"></i>
							<h4>Location</h4>
							<p>Palam, Delhi</p>
						</div>
					</div>

					{/* <!-- ======Contact info item ======= --> */}
					<div className="contact-info-item padd-15">
						<div className="icon">
							<i className="fa fa-envelope"></i>
							<h4>Email</h4>
							<p>aditya.maurya.1003@gmail.com</p>
						</div>
					</div>

					{/* <!-- ======Contact info item ======= --> */}
					<div className="contact-info-item padd-15">
						<div className="icon">
							<i className="fa fa-solid fa-arrow-up-right-from-square"></i>
							<h4>Website</h4>
							<p>aditya-k-maurya.vercel.app</p>
						</div>
					</div>
				</div>

				<h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
				<h4 className="contact-sub-title padd-15">
					I'M VERY RESPOSIVE TO MESSAGES
				</h4>

				{/* <!-- ===== Contact form ===== --> */}
				<div className="contact-form padd-15">
					<div className="row">
						<div className="form-item col-6 padd-15">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Name"
								/>
							</div>
						</div>

						<div className="form-item col-6 padd-15">
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="form-item col-12 padd-15">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Subject"
								/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="form-item col-12 padd-15">
							<div className="form-group">
								<textarea
									name=""
									className="form-control"
									placeholder="Message"></textarea>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="form-item col-12 padd-15">
							<button type="submit" className="btn">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default page;
