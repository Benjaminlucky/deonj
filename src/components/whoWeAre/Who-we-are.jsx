import React from 'react'
import './who-we-are.css'

function Who() {
  return (
    <div className="whoWeAre__container">
        <div className="who__content">
            <div className="who__left">
                <img src="./assets/Kola-nut.webp" alt="Kola nut" />
            </div>
            <div className="who__right">
                <div className="who__title">Who we are</div>
                <div className="who__text">
                    <p>Deon J GLOBAL Resources Ltd is a leading player in the export of solid minerals and agro products, specializing in bitter kola, peanuts, and soybeans.</p>
                    <p>We are committed to quality and reliability, catering to international markets by delivering premium-grade products sourced from trusted suppliers.</p>
                    <p>Our diversified portfolio also includes large-scale farming operations, where we leverage modern agricultural practices to cultivate high-yield crops.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Who