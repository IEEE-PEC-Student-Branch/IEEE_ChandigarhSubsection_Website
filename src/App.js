import logo from './logo.svg';
import './App.css';
import { useRef, useEffect } from 'react';
import subsectionlogo from './images/subsectionlogo.png';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import '.header.css';

function App() {
  const hamburgerRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const toggleMenu = event => {
      console.log('hamburger icon clicked');
      const mobileDropdownEl = mobileDropdownRef.current
      if (mobileDropdownEl.classList.contains('show')) {
        mobileDropdownEl.classList.remove('show');
      } else {
        mobileDropdownEl.classList.add('show');
      }
    };

    const hamburgerEl = hamburgerRef.current;

    hamburgerEl.addEventListener('click', toggleMenu);

    return () => {
      hamburgerEl.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <div className="App">
        <nav className="navbar">
          <div className="container">
            <a class="navbar-brand" href="index.html"><img src={subsectionlogo} width="150px" height="50px" /> </a>
            <div id="menuToggle" ref={hamburgerRef}>       
              <span></span>
              <span></span>
              <span></span>
              <div className="menu-wrapper" ref={mobileDropdownRef}>
                <ul id="menu">
                  <a href="#"><li>Home</li></a>
                  <a href="#"><li>About</li></a>
                  <a href="#"><li>Events</li></a>
                  <a href="#"><li>Sponsors</li></a>
                  <a href="#"><li>Contact Us</li></a>
                  <a href="#"><li>Join IEEE</li></a>
                </ul>
              </div>
             
            </div>
            <ul className="navbar-nav">
              <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
              <li className="nav-item"><a href="event.html" className="nav-link">Events</a></li>
              <li className="nav-item"><a href="sponsors.html" className="nav-link">Sponsors</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></li>
              <li className="nav-item"><a href="JoinIEEE.html" className="nav-link">Join IEEE</a></li>
            </ul>
          </div>
        </nav>
        <section className="hero-section">
        </section>
        <section className="services-section">
          Services section
        </section>
        <section className="about-us">
          Hero image will go here
        </section>
    </div>
  );
}

export default App;
