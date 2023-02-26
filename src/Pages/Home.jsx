import React from 'react'
import AboutContainer from '../Components/aboutContainer'
import Contacts from '../Components/contact'
import Navbar from '../Components/navbar'
import News from '../Components/news'
import Poster from '../Components/poster'
import Services from '../Components/services'
import Whyus from '../Components/whyus'

const Home = () => {
  return (
    <div>
      <Contacts />
      <Navbar />
      <Poster />
      <Services />
      <AboutContainer />
      <Whyus />
      <News />
    </div>
  )
}

export default Home
