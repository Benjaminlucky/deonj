import React from 'react'
import './home.css'
import Hero from '../../components/hero/Hero'
import Who from '../../components/whoWeAre/Who-we-are'
import Products from '../../components/products/Products'
import Assurance from '../../components/assurance/Assurance'
import Contact from '../../components/contact/Contact'

function Home() {
  return (
    <main className="home__section">
      <div className="home__wrapper">
        <Hero/>
        <Who />
        <Products />
        <Assurance />
        <Contact />
      </div>
    </main>
  )
}

export default Home