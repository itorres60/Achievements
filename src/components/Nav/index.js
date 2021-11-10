import React, { useEffect } from 'react';

function Nav(props) {

  useEffect(() => {
    document.title = "Portfolio";
  });

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="icon"></span> J I Torres
        </a>
      </h2>

      <nav>
        <ul className="flex-row">
{/* 
          <li className={`mx-2 ${aboutMeClicked && 'navActive'}`}>
            <span onClick={() => setAboutMeClicked(true)}>About me</span>
          </li>

          <li className={`mx-2 ${contactClicked && 'navActive'}`}>
            <span onClick={() => setContactClicked(true)}>Contact</span>
          </li>

          <li className={`mx-2 ${projectsClicked && 'navActive'}`}>
            <span onClick={() => setProjectsClicked(true)}>Projects</span>
          </li>

          <li className={`mx-2 ${resumeClicked && 'navActive'}`}>
            <span onClick={() => setResumeClicked(true)}>Resume</span>
          </li> */
          }

        </ul>
      </nav>

    </header>
  );
}

export default Nav;
