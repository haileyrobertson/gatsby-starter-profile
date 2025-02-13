import React from "react"

import Link from "../../../link/link"

const getLinks = links => {
  const linkComponents = {
    publications: (
      <Link key="publications" to="/publications">
        Publications
      </Link>
    ),
    cv: (
      <Link key="cv" to="/cv">
        CV
      </Link>
    ),
  }

  return <>{links.map(link => linkComponents[link])}</>
}

export default getLinks
