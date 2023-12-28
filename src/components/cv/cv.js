import React from "react"
import { Link } from "gatsby"

import "./cv.css"

const CV = ({ cv }) => (
  <div className="cv">
    <section>
      <header>
        <h1>Curriculum Vitae</h1>
      </header>
      <p>
        A PDF of my CV (last updated Dec. 2023) is available for{" "}
        <Link to="/RobertsonHailey_CV_2023.pdf" download>
          download.
        </Link>
      </p>
      <div className="pdf-embed-container">
        <iframe
          title="CV"
          src="/RobertsonHailey_CV_2023.pdf"
          width="100%"
          height="600px"
        ></iframe>
      </div>
    </section>
  </div>
)

export default CV
