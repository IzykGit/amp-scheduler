import React from 'react'

import HomeStyles from '../styles/Home.module.css'

import Navbar from '../components/logged-in/Navbar'

const Home = () => {
    return (
        <>
        <Navbar />
        <main className={HomeStyles.home_main}>

            <section className={HomeStyles.fold}>

            </section>

        </main>
        </>
    )
}

export default Home
