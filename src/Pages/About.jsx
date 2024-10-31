import React from 'react'
import {AboutHero , AboutFeature , AboutCEOs} from "../Components/index"
const About = () => {
  return (
    <div className=' my-12 max-md:my-8 space-y-16'>
        <AboutHero/>
        <AboutFeature/>
        <AboutCEOs/>
    </div>
  )
}

export default About