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
          <em> medXriv.</em>{" "}
          <a href="https://doi.org/10.1101/2023.06.24.23291861">
            DOI: 10.1038/s41597-023-02398-3.
          </a>
        </li>
      </ul>
    </section>
    <section>
      <header>
        <h1>Works in Progress</h1>
      </header>
      <ul>
        <li>
          <strong>Robertson H</strong>, Graeden E, Castellanos A, Rosado D,
          Drake J, and Han B. Understanding Ecological Systems Using Knowledge
          Graphs.
        </li>
        <li>
          <strong>Robertson H</strong>, Graeden E, Kerr J, Van Maele M, and Katz
          R. Follow the Money: A Global Analysis of Funding Dynamics for Global
          Health Security.
        </li>
        <li>
          Epureanu B, Han B, Graeden E, Bahl J, Rohani P, Cacciatore M, Ghadami
          A, Nowak G, Marty E, <strong>Robertson H</strong>, Sarkar S, Faizullah
          S, Stott G, King J, and Drake J. Using system-of-systems to advance
          pandemic intelligence for preparedness and response.
        </li>
        <li>
          Far N, <strong>Robertson H</strong>, and Zvobgo K. Confronting Truth:
          A Theory of Transitional Justice in Established Democracies.
        </li>
      </ul>
    </section>
    <section>
      <header>
        <h1>Technical Reports</h1>
      </header>
      <header>
        <h2>2023</h2>
      </header>
      <ul>
        <li>
          Graeden E, <strong>Robertson H</strong>, and Abramowitz S. "COVID-19
          and Behavioral Health in the District of Columbia." Report prepared
          for the{" "}
          <em>
            <a href="https://dcauditor.org/report/covid-19-behavioral-health-in-the-district-of-columbia/">
              Office of the District of Columbia Auditor.
            </a>
          </em>{" "}
          April 20, 2023.
        </li>
      </ul>
      <header>
        <h1>Public Scholarship</h1>
      </header>
      <header>
        <h2>2021</h2>
      </header>
      <ul>
        <li>
          <a href="https://uscpublicdiplomacy.org/blog/winning-hearts-minds-through-shot-arm">
            "Winning Hearts & Minds: Through a Shot in the Arm"
          </a>{" "}
          with S. Dasaraju, S. Menon, and S. Nair-Desai.{" "}
          <em>USC Center for Public Diplomacy.</em> 21 Apr. 2021.
        </li>
        <li>
          <a href="https://www.washingtonpost.com/politics/2021/02/17/international-criminal-court-just-elected-new-chief-prosecutor-heres-what-you-need-know/">
            "The International Criminal Court just elected a new chief
            prosecutor. Here's what you need to know."
          </a>{" "}
          with K. Zvobgo and N. Far. <em>The Washington Post [Monkey Cage].</em>{" "}
          17 Feb. 2021.
        </li>
      </ul>
    </section>
  </div>
)

Publications.propTypes = {
  publications: PropTypes.shape({}).isRequired,
}

export default Publications
