import PropTypes from "prop-types"
import React from "react"
import "./publications.css"
import PublicationList from "./list"

const Publications = ({ publications }) => (
  <div className="publications">
    <section>
      <header>
        <h1>Peer-Reviewed Publications</h1>
      </header>
      <PublicationList publications={publications} />
    </section>
    <section>
      <header>
        <h1>Publications in Review</h1>
      </header>
      <ul>
        <li>
          Moore M, <strong>Robertson H</strong>, Rosado D, Graeden E, Carlson C,
          and Katz R.{" "}
          <strong>
            Preparedness in practice: An outbreak science approach to studying
            public health emergency response.
          </strong>
          <em> medXriv.</em> 2023, DOI:{" "}
          <a href="https://doi.org/10.1101/2023.06.24.23291861">
            10.1038/s41597-023-02398-3
          </a>
          .
        </li>
        <li>Your second publication in review</li>
      </ul>
    </section>
    <section>
      <header>
        <h1>Works in Progress</h1>
      </header>
      <h6>List</h6>
    </section>
    <section>
      <header>
        <h1>Public Scholarship</h1>
      </header>
      <h6>List</h6>
    </section>
  </div>
)

Publications.propTypes = {
  publications: PropTypes.shape({}).isRequired,
}

export default Publications
