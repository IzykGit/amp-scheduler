import React from 'react'

import HomeStyles from '../styles/Home.module.css'

import Navbar from '../components/logged-in/Navbar'

const Home = () => {
    return (
        <>
        <Navbar />

        <main className={HomeStyles.home_main}>

            <section className={HomeStyles.fold}>

                <div className={HomeStyles.fold_text}>
                    <h1 className={HomeStyles.fold_slogan}>We Make Scheduling Easy</h1>

                    <ul className={HomeStyles.fold_list}>
                        <li>Create Schedules</li>
                        <li>Host Meetings</li>
                        <li>Manage Employees</li>
                    </ul>

                </div>

            </section>

            <section>
                
            </section>

        </main>
        </>
    )
}

export default Home
