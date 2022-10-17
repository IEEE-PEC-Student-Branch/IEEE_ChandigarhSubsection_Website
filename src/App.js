import logo from './logo.svg';
import './App.css';
import subsectionlogo from './images/subsectionlogo.png';
// import '.header.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar" id="ftco-navbar">
          <div className="container">
            <a class="navbar-brand" href="index.html"><img src={subsectionlogo} width="150px" height="50px" /> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
              <li className="nav-item"><a href="event.html" className="nav-link">Events</a></li>
              <li className="nav-item"><a href="sponsors.html" className="nav-link">Sponsors</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></li>
              <li className="nav-item"><a href="JoinIEEE.html" className="nav-link">Join IEEE</a></li>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default App;
