import '../../index.css'
import NavBar from '../../components/activity/NavBar/NavBar'
import Header from '../../components/activity/Header/Header'
import AboutUs from '../../components/activity/AboutUs/AboutUs'
import Categories from '../../components/activity/Categories/Categories'
import Promotion from '../../components/activity/Promotion/Promotion'

export function Landing_Page() {
    return (
      <>
         <NavBar/> 
         <Header/>
         <AboutUs/>
         <Categories/>
         <Promotion/>
      </>
    )
  }  