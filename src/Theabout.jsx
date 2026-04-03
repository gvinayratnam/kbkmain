import React from 'react'
import NavBar from './NavBar'
import AboutHero from './About Components/AboutHero'
import Banner from './About Components/Banner'
import Progress from './About Components/Progress'
import Awards from './About Components/Awards'
import Aboutslider from './About Components/Aboutslider'
import Skill from './About Components/Skill'
import Achivements from './About Components/Achivements'
import Experts from './About Components/Experts'
import Project from './About Components/Project'

import Footer from './Footer'

const Theabout = () => {
  return (
    <div>
      <AboutHero/>
      <Banner/>
      <Progress/>
      <Awards/>
      <Aboutslider/>
      <Skill/>
      <Achivements/>
      <Experts/>
      <Project/>
      <div className='lg:h-0 sm:h-10 bg-black h-0 w-full border'>

      </div>
      <Footer/>
    </div>
  )
}

export default Theabout
