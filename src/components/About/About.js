import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>Created by</h2>
      <article className='dev' id='richard'>
        <img className='dev-image' src='https://avatars.githubusercontent.com/u/70095063?s=400&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4' alt='Richard Tyler' />
        <h3 className='dev-name'>Richard Tyler</h3>
        <a className='dev-gh' href='https://github.com/richardltyler'>Richard's GitHub</a>
        <a  className='dev-li' href='https://www.linkedin.com/in/richardltyler/'>Richard's LinkedIn</a>
      </article>
      <h3>Context</h3>
      <p className="answer">
        This app was created by Richard Tyler to practice using React and React Router with Asynchronous Javascript. 
      </p>
      <h3>Technologies</h3>
      <ul>
        <li>React.js</li>
        <li>React-Router</li>
        <li>FetchAPI</li>
        <li>Cypress.js</li>
      </ul>
    </section>
  );
}

export default About;