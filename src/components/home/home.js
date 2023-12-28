import React from "react"

import About from "./about/about-container"
import Contact from "./contact/contact-container"
import Landing from "./landing/landing-container"
import { GutterLeft, GutterRight } from "./gutter/gutter"

import "./home.css"

const Home = () => (
  <>
    <Landing />
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">
        <About />
        <Contact />
      </div>
      <GutterRight />
    </div>
  </>
)

export default Home
