import React from 'react'
import AboutContainer from '../Components/aboutContainer'
 import Carousel from '../Components/Carousel'
import Contacts from '../Components/contact'
// import Feedback from '../Components/feedback'
import Footer from '../Components/footer'
import Navbar from '../Components/navbar'
// import News from '../Components/news'
import Poster from '../Components/poster'
import Services from '../Components/services'
import Whyus from '../Components/whyus'
// import SearchContainer from './searchContainer'
import SearchOverlay from './searchOverlay'

const Home = () => {
  return (
    <div>
      <Contacts />
      <Navbar />
      <SearchOverlay />
      {/* <SearchContainer /> */}
      <Poster />
      <Services />
      <AboutContainer />
      <Whyus />
      <Carousel/> 
      {/* <News /> */}
      {/* <Feedback /> */}
      <Footer />

    </div>
  )
}

export default Home
