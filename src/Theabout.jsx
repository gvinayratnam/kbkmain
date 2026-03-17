import React from 'react'
import NavBar from './NavBar'
import AboutHero from './About Components/AboutHero'
import Banner from './About Components/Banner'
import Progress from './About Components/Progress'
import Awards from './About Components/Awards'
import Aboutslider from './About Components/Aboutslider'
import Skill from './About Components/Skill'

const Theabout = () => {
  return (
    <div>
      <AboutHero/>
      <Banner/>
      <Progress/>
      <Awards/>
      <Aboutslider/>
      <Skill/>
    </div>
  )
}

export default Theabout
