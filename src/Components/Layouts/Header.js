import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div>
    <header id="site-header" className="header">
      <div id="header-wrap">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg">
                <Link  className="navbar-brand logo" to="/">
                  <img
                    id="logo-img"
                    className="img-fluid"
                    src="images/VanKranti-darkgreen-mini.png"
                    alt=""
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                   <span></span>
                   <span></span>
                   <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto position-relative">
                  <li className="nav-item dropdown">
                   <Link to="/" className={splitLocation[1] === "" ? "nav-link active" : "nav-link"}> Home </Link>
               </li>
              <li className="nav-item dropdown">
                <Link className={splitLocation[1] === "aboutus" ? "nav-link active" : "nav-link"} to="/aboutus"> About Us </Link>
              </li>


                <li className="nav-item active" data-toggle="hover">
                   <Link to="/community" className={splitLocation[1] === "community" ? "nav-link active" : "nav-link"}> Community </Link>
              </li>


              <li className="nav-item dropdown">
                 <Link className={splitLocation[1] === "technology" ? "nav-link active" : "nav-link"} to="/technology"> Technology </Link>
              </li>


              <li className="nav-item dropdown">
                 <Link className={splitLocation[1] === "seedball" ? "nav-link active" : "nav-link"} to="/seedball"> SeedBalls </Link>
              </li>
           

              <li className="nav-item dropdown">
                 <Link className={splitLocation[1] === "supportus" ? "nav-link active" : "nav-link"} to="/supportus">SupportUs </Link>
              </li>
                 </ul>
                </div>
                <div className="right-nav align-items-center d-flex justify-content-end">
                  <Link to="/" className="ht-nav-toggle">
                    <span></span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>

    <nav id="ht-main-nav"> <a href="#" className="ht-nav-toggle active"><span></span></a>
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <img className="img-fluid side-logo mb-3" src="images/VanKranti-darkgreen-mini.png" alt=""/>
                      <p className="mb-5">First project for this is Drone based Seed bomb delivery system is successfully executed in Haripur and Bhit Khurd villages of Tapi district, Gujarat, India. This was done in collaboration with Ahmedabad based Drone manufacturing company Z Axis unmanned machines pvt. Ltd. This was done in presence of villagers and village elders of both villages, local forest officers and other local environmentalists. For long term we will build a drone workshop in Vyara with the help of local technical collage students and engineers, which is the main town near Haripur village/Ucchal area where this re-forestation project is starting. This will provide new skills and employment for local youth and villagers. </p>
                      {/* <div className="form-info">
                          <h4 className="title">Contact info</h4>
                          <ul className="contact-info list-unstyled mt-4">
                              <li className="mb-4"><i className="flaticon-location"></i><span>Address:</span>
                                  <p className="mb-0">Todo</p>
                                  <p className="mb-0">Near VIP Circle,</p>
                                  <p className="mb-0">Utran,Surat.</p>
                                  <p className="mb-0">Gujarat-394101,India</p>
                              </li>
                              <li className="mb-4"><i className="flaticon-call"></i><span>Phone:</span><a
                                      href="tel:+919081816812">+91-9081816812</a>
                              </li>
                              <li><i className="flaticon-email"></i><span>Email</span>
                                  <a href="mailto:info@webroidsolutions.com">
                                      info@webroidsolutions.com</a>
                              </li>
                          </ul>
                      </div> */}
                      {/* <div className="social-icons social-colored mt-5">
                          <ul className="list-inline">
                              <li className="mb-2 social-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a>
                              </li>
                              <li className="mb-2 social-twitter"><a href="#"><i className="fab fa-twitter"></i></a>
                              </li>
                              <li className="mb-2 social-linkedin"><a href="#"><i className="fab fa-linkedin-in"></i></a>
                              </li>
                              <li className="mb-2 social-gplus"><a href="#"><i className="fab fa-google-plus-g"></i></a>
                              </li>
                          </ul>
                      </div> */}
                  </div>
              </div>
          </div>
      </nav>

      
   </div>
  )
}
