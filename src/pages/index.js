import * as React from "react"
import { Link } from 'gatsby'
import "../styles/global.css"

const IndexPage = () => {
  return (
    <main>
      <div className="landing-page-wrapper">
        <div className="landing-page">
          <h1 className="intro-1">Hi my name is</h1>
          <h1 className="intro-2">Tanika Jangam</h1>
          <h2 className="intro-3">CloudOps Intern @ Vanguard</h2>
          <h2 className="intro-3">CS & Math @ UMD</h2>
          <div>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>

          <p>I am a dedicated Computer Science and Mathematics major at the University of Maryland, passionate about software development and problem-solving. I am actively seeking opportunities in the Washington D.C. and Princeton areas to further my career in technology and innovation.</p>
          <p>Currently, I am focused on developing cloud services at Vanguard, where I work on innovative solutions that enhance efficiency and scalability.</p>
        </div>
        <div>
        </div>

      </div>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

