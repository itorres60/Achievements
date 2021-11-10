import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Self-challenged, highly motivated web developer leveraging a broad skill-set prepared through a successful curriculum at the University of Texas Coding Bootcamp.  Formed a strong understanding of HTML and CSS, JS, node, and many of their associated frameworks.  I have a strong portfolio of completed web applications and group collaborations.  In my collaborative work I focused primarily on Javascript front end logic tying in nested API’s to interactive UIs as well as tying in back end server logic to front end HTML elements using javascript.  I have leveraged leadership skills from an extensive career as a tower and mobile crane operating engineer.  As an operator of such gargantuan equipment I have learned the importance of emphasizing quality in the smallest of details and intend to carry over that same characteristic to my web development practices. I source my motivation for a career in web development from the many opportunities I see in the construction and logistics industry for advancement in information technology.  I pride myself in being an integral component of any group collaboration, but also in my pioneering quality in individual endeavors producing extraordinary works at every opportunity.
        </p>
      </div>
    </section>
  );
}

export default About;
