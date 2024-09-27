import React from 'react'

import NavStyles from "../../styles/components/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={NavStyles.nav}>
      <p className={NavStyles.title}>Amp Scheduler</p>

      <ul className={NavStyles.nav_items_list}>
        <li className={NavStyles.nav_item}>Log In</li>
        <li className={NavStyles.nav_item}>Sign Up</li>
        <li className={NavStyles.nav_item}>FAQ</li>
      </ul>
    </nav>
  )
}

export default Navbar
