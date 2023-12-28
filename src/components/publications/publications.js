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
      <h6>List</h6>
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
