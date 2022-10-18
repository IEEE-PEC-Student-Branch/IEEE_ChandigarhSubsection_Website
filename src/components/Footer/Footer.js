import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">IEEE Chandigarh Subsection</h2>
              <p>
                IEEE is one of the largest technical societies . It is an
                exemplary platform for students to polish their technical
                skillset and helps them in their personal professional growth.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate">
                  <a href="https://www.linkedin.com/company/ieeedelhissn/">
                    <span className="icon-linkedin">
                      <FaLinkedinIn />
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.facebook.com/ieeedelhissn">
                    <span className="icon-facebook">
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.instagram.com/ieeedelhissn/">
                    <span className="icon-instagram">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.youtube.com/channel/UCI70Hlz4AHmfgY_xWadTtig">
                    <span className="icon-youtube">
                      <TfiYoutube />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">References</h2>
              <ul className="list-unstyled">
                {/* <!-- <li><a href="speakers.html" className="py-2 d-block">Speakers</a></li> --> */}
                <li>
                  <a href="https://www.ieee.org/" className="py-2 d-block">
                    IEEE.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://ieeexplore.ieee.org/Xplore/home.jsp"
                    className="py-2 d-block"
                  >
                    IEEE Xplore Digital Library
                  </a>
                </li>
                <li>
                  <a
                    href="https://standards.ieee.org/"
                    className="py-2 d-block"
                  >
                    IEEE Standards
                  </a>
                </li>
                <li>
                  <a href="https://spectrum.ieee.org/" className="py-2 d-block">
                    IEEE Spectrum
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- div className="col-md">
					<div className="ftco-footer-widget mb-4">
						<h2 className="ftco-heading-2">Privacy</h2>
						<ul className="list-unstyled">
							<li><a href="about.html" className="py-2 d-block">About Us</a></li>
							<li><a href="contact.html" className="py-2 d-block">Contact Us</a></li>
							<li><a href="team.html" className="py-2 d-block">Team</a></li>
						</ul>
					</div>
				</div --> */}
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contact Us</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker">
                      <FaMapMarkerAlt />
                    </span>
                    <span className="text">Chandigarh, India</span>
                  </li>
                  <li>
                    <a href="mailto:ieeechandigarhsubsection@gmail.com">
                      <span className="icon icon-envelope">
                        <FaEnvelope />
                      </span>
                      <span className="text">
                        ieeechandigarhsubsection@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              Copyright &copy;
              {new Date().getFullYear()} All rights reserved
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
