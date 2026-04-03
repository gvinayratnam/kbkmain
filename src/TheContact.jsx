import React from 'react'
import ContactHero from './contact Components/ContactHero'
import ContactBanner from './contact Components/ContactBanner'
import Contactdetails from './contact Components/Contactdetails'
import Footer from './Footer'


const TheContact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactBanner/>
      <Contactdetails/>
      <Footer/>
    </div>
  )
}

export default TheContact
