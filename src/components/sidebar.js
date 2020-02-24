import { Link } from 'gatsby'
import React from 'react'
import { FaHome, FaBook, FaUser, FaSignInAlt, FaBaseballBall, FaDoorClosed } from 'react-icons/fa'

const Sidebar = () => {
  <aside className="column is-narrow is-fullheight section is-hidden-touch">
    <p className="menu-label is-hidden-touch">
      Menu
    </p>
    <ul className="menu-list">
      <li>
        <Link to="/" exact-active-class="is-active">
          <FaHome />
        </Link>
      </li>
      <li>
        <Link to="/research" exact-active-class="is-active">
          <FaUser />
        </Link>
      </li>
      <li>
        <Link to="/players" exact-active-class="is-active">
          <FaSignInAlt />
        </Link>
      </li>
      <li>
        <Link to="/login" exact-active-class="is-active">
          <FaDoorClosed />
        </Link>
      </li>
    </ul>
  </aside>
}

export default Sidebar