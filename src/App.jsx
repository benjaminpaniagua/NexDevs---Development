import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/ui/NavBar/NavBar.jsx';
import Footer from './components/ui/Footer/Footer.jsx'
import { Landing_Page } from './components/pages/Landing_Page.jsx';
import { Access_Panel } from './components/pages/Access_Panel.jsx';
import { Work_Profiles } from './components/pages/Work_Profiles.jsx';
import Categories_Page from './components/pages/Categories_Page.jsx';
import { Community_Feed } from './components/pages/Community_Feed.jsx';
import { Error_404 } from './components/pages/Error_404.jsx';
import { Profiles_List } from './components/pages/Profiles_List.jsx';

const MainApp = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/Access_Panel');

  return (
    <div>
      {showNavbar && <NavBar />}
      <div className={`flex-1 ${showNavbar ? 'mt-[75px]' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/access_panel/*" element={<Access_Panel />} />
          <Route path="/categories/" element={<Categories_Page />} />
          <Route path="/profiles/" element={<Profiles_List />} />
          <Route path="/workProfile/:userId" element={<Work_Profiles />} />
          <Route path="/community_feed/" element={<Community_Feed />} />
          <Route path="*" element={<Error_404 />} />
        </Routes>
      </div>
      {showNavbar && <Footer/>}
    </div>
  );
};

const App = () => (
  <Router>
    <MainApp />
  </Router>
);

export default App;