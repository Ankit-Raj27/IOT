import React from 'react'
import AboutContainer from '../Components/aboutContainer'
// import Carousel from '../Components/Carousel'
import Contacts from '../Components/contact'
import Feedback from '../Components/feedback'
import Footer from '../Components/footer'
import Navbar from '../Components/navbar'
import News from '../Components/news'
import Poster from '../Components/poster'
import Services from '../Components/services'
import Whyus from '../Components/whyus'
import SearchOverlay from './searchOverlay'

const Home = () => {
  return (
    <div>
      <Contacts />
      <Navbar />
      <SearchOverlay />
      <Poster />
      <Services />
      <AboutContainer />
      <Whyus />
      <News />
      <Feedback />
      <Footer />
      {/* <Carousel/> */}

    </div>
  )
}

export default Home
