import PropTypes from "prop-types"
import React from "react"

import Link from "../../../link/link"
import Logo from "../../../../images/logo.inline.svg"

import "./icon.css"

const Icon = ({ isHomePage }) => (
  <Link aria-label="Hailey Robertson" className="nav__icon" nav to="/">
    <div className="nav__icon-svg-container">
      <Logo />
    </div>
    {<span>Hailey Robertson</span>}
  </Link>
)

Icon.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
}

export default Icon
