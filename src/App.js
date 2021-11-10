import React, { useEffect } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

// const [clickedNav, setClickedNave] = useState(false)



function App() {

  useEffect(() => {
    document.title = "Portfolio";
  });

  return (

  <Router>
    <header className="flex-row px-1">
      <h2>
        <Link to="/">
          <span role="img" aria-label="icon"></span> J I Torres
        </Link>
      </h2>

      <nav>
        <ul className="flex-row">
          <li>
            <Link className="mx-2" to="/about-me">About Me</Link>
          </li>
          <li>
            <Link className="mx-2" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="mx-2" to="/contact-me">Contact Me</Link>
          </li>
          <li>
            <Link className="mx-2" to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>


    </header>

    <Routes>
      <Route path="/Achievements" element={<About></About>}>
      </Route>
      <Route path="" element={<About></About>}>
      </Route>
      <Route path="/about-me" element={<About></About>}>
      </Route>
      <Route path="/projects" element={<Projects></Projects>}>
      </Route>
      <Route path="/contact-me" element={<ContactForm></ContactForm>}>
      </Route>
      <Route path="/resume" element={<Resume></Resume>}>
      </Route>
    </Routes>
    <footer>
      <a className="mx-2" href="https://github.com/itorres60">GITHUB</a>
      <a className="mx-2" href="https://www.linkedin.com/in/torresji/">LINKEDIN</a>
    </footer>
  </Router>


  );
}

export default App;
