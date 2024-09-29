import React, { useState } from 'react'
import { motion } from 'framer-motion';

import NavStyles from "../styles/components/Navbar.module.css"

const Navbar = () => {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };


  // const lineVariants = {
  //   closed: {
  //     rotate: 0,
  //     y: 0,
  //     x: 0,
  //   },
  //   openTop: {
  //     rotate: 45,
  //     y: 7,
  //     x: 0,
  //   },
  //   openMiddle: {
  //     opacity: 0,
  //   },
  //   openBottom: {
  //     rotate: -45,
  //     y: -13,
  //     x: 0,
  //   },
  // };

  // const menuVariants = {
  //   closed: {
  //     height: 0,
  //     opacity: 0,
  //     transition: {
  //       duration: 0.3,
  //       opacity: { duration: 0.2 },
  //     },
  //   },
  //   open: {
  //     height: '300px',
  //     opacity: 1,
  //     transition: {
  //       duration: 0.3,
  //       opacity: { delay: 0.2 },
  //     },
  //   },
  // };


  return (
    <>
    {/* <div className={NavStyles.hamburger} onClick={toggleMenu}>
    <motion.div
        variants={lineVariants}
        initial="closed"
        animate={isOpen ? 'openTop' : 'closed'}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        variants={lineVariants}
        initial="closed"
        animate={isOpen ? 'openMiddle' : 'closed'}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        variants={lineVariants}
        initial="closed"
        animate={isOpen ? 'openBottom' : 'closed'}
        transition={{ duration: 0.3 }}
      />
    </div>


    <motion.nav className={NavStyles.nav} initial="closed"
    variants={menuVariants} animate={isOpen ? 'open' : 'closed'}>
      <button type='button'>Log In</button>
      <button type='button'>Sign Up</button>
      <button type='button'>FAQ</button>
    </motion.nav> */}
    <div className={NavStyles.nav_container}>
      <motion.nav className={NavStyles.nav}>
        <button type='button'>Home</button>
        <button type='button'>Sign In</button>
        <button type="button">Pricing</button>
        <button type='button'>Try For Free</button>
      </motion.nav>
    </div>
    </>
  )
}

export default Navbar
