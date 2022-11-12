import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="footer white-bg z-index-1 overflow-hidden bg-contain" data-bg-img="images/pattern/01.png">
  <div className="round-p-animation"></div>
	<div className="primary-footer">
		<div className="container-fluid p-0">
			<div className="row">
				<div className="col-lg-4">
					<div className="ht-theme-info bg-contain bg-pos-r h-100 green-bg text-white" data-bg-img="images/bg/02.png">
						<div className="footer-logo">
							<a href="index.html">
                             <img className="img-fluid" src="images/VanKranti-darkgreen-mini.png" alt=""/>
                            </a>
						</div>
						<p className="mb-3">Van Kranti is a climate change centric reforestation/afforestation project started in a little indigenous village in India called Haripur by Nilesh Vasave with an aim to spreading the climate revolution across the country specifically in Adivasi areas, which are indigenous people of India who mainly lives in and around forests and are first line of defense against deforestation and climate change.</p>
						<div className="social-icons social-border circle social-hover mt-5">
							<h4 className="title">Follow Us</h4>
							<ul className="list-inline">
								<li className="social-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a>
								</li>
								<li className="social-twitter"><a href="#"><i className="fab fa-twitter"></i></a>
								</li>
								<li className="social-gplus"><a href="#"><i className="fab fa-google-plus-g"></i></a>
								</li>
								<li className="social-linkedin"><a href="#"><i className="fab fa-linkedin-in"></i></a>
								</li>
								<li className="social-skype"><a href="#"><i className="fab fa-skype"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-8 py-8 px-5">
					<div className="row">
						<div className="col-lg-6 col-md-6 footer-list">
							<h4 className="title">Useful Links</h4>
							<div className="row">
								<div className="col-sm-5">
									<ul className="list-unstyled">
										<li><a href="about-us.html">About Us</a>
										</li>
										<li><a href="service.html">Community</a>
										</li>
										<li><a href="case-studies-grid-3.html">Technology</a>
										</li>
										<li><a href="project-grid-3.html">Seedball</a>
										</li>
										<li><a href="faq.html">Suport us</a>
										</li>
									</ul>
								</div>
								
							</div>
						</div>
						<div className="col-lg-6 col-md-6 mt-5 mt-md-0">
							<h4 className="title">Drop By</h4>
							<ul className="media-icon list-unstyled">
								<li>
									<p className="mb-0">Haripur Village</p>
								</li>
									<li>Ta: Ucchal</li>
								<li>D: Tapi</li>
                             <li>Gujarat, India</li>
							</ul>
						</div>
					</div>
		
				</div>
			</div>
		</div>
	</div>
	<div className="secondary-footer">
		<div className="container">
			<div className="copyright">
				<div className="row align-items-center">
					<div className="col-md-6"> <span>Copyright 2023 | All Rights Reserved</span>
					</div>
					<div className="col-md-6 text-md-end sm-mt-2"> <span>Managed by alisha@gmail.com</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
    </div>
  )
}
