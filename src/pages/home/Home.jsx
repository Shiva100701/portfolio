import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"

function Home() {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Shivam Mishra. </span>Full Stack Developer
          </h1>
          <p className="home__description">
            Full Stack Developer proficient in MERN and Django stacks. Skilled
            in MongoDB, Node.js, Express.js, React.js, HTML, CSS, and basics of
            Python. Committed to crafting sleek, user-friendly web solutions
            with a creative edge.
          </p>

          <Link to="/about" className='button'>
              More About Me <span className="button__icon"><FaArrowRight  /></span>
          </Link>
        </div>
      </div>
      <div className="color__block">
        
      </div>
    </section>
  );
}

export default Home