import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>Lets talk about Quoting Bad</h2>
      <h3>Context</h3>
      <p className="answer">
        This project is the developers' first time creating an application using Vue.js. After spending some time learning React, the developers chose to dive into learning the basics of Vue.js and see the comparison. The team set goals of implementing Vue Router and End to End testing using Cypress.js.
      </p>
      <h3>Design</h3>
      <p className="answer">
        The team's inspiration for this application came from the information displayed on the <a href="https://apod.nasa.gov/apod/astropix.html">Astronomy Picture of the Day</a> site and uses the <a href="https://api.nasa.gov/index.html">APOD API</a>.
      </p>
      <h3>Technologies</h3>
      <ul>
        <li>React.js</li>
        <li>React-Router</li>
        <li>Cypress.js</li>
      </ul>
      <h3>Created by</h3>
      <article className='dev' id='richard'>
        <img className='dev-image' src='https://avatars.githubusercontent.com/u/70095063?s=400&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4' alt='Richard Tyler' />
        <h2 className='dev-name'>Richard Tyler</h2>
        <a className='dev-gh' href='https://github.com/richardltyler'>Richard's GitHub</a>
        <a  className='dev-li' href='https://www.linkedin.com/in/richardltyler/'>Richard's LinkedIn</a>
      </article>
    </section>
  );
}

export default About;