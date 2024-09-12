import '../../index.css'
import NavBar from '../ui/NavBar/NavBar'
import Header from '../landing_page_components/Header/Header'
import AboutUs from '../landing_page_components/AboutUs/AboutUs'
import Categories from '../landing_page_components/Categories/Categories'
import Promotion from '../landing_page_components/Promotion/Promotion'
import Footer from '../landing_page_components/Footer/Footer'

export function Landing_Page() {
    return (
      <>
         <NavBar/> 
         <Header/>
         <AboutUs/>
         <Categories/>
         <Promotion/>
         <Footer/>
      </>
    )
  }  