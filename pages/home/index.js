
import React from 'react'

// Views Sections here
import HeroSection from '../../views/HeroSection/firstfold'
import HomeCarousel from '../../views/HomeCarousel/HomeCarousel'
import HomeCarouselMobile from '../../views/HomeCarouselMobile/HomeCarouselMobile'
import Reservation from '../../views/Reservation'
import Secondfold from '../../views/SecondFold/secondfold'
import ThreeDView from '../../views/ThreeDView'
import Layout from '../../components/Layout/Layout'
import Footer from '../../views/Footer/Footer'

export default function Home() {
  return (
    <Layout footerHide={true}>
      <div className='home-section'>
        <HeroSection />
        <Secondfold />
        <ThreeDView />
        <HomeCarousel />
        <HomeCarouselMobile />
        <Reservation />
        <Footer />
      </div>
    </Layout>
  )
}
