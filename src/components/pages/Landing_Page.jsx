import '../../index.css'
import Header from '../landing_page_components/Header/Header'
import AboutUs from '../landing_page_components/AboutUs/AboutUs'
import Categories from '../landing_page_components/Categories/Categories'
import Promotion from '../landing_page_components/Promotion/Promotion'
import Footer from '../landing_page_components/Footer/Footer'

export function Landing_Page() {
    return (
      <>
         <Header/>
         <AboutUs/>
         <Categories/>
         <Promotion/>
         <Footer/>
      </>
    )
  }  