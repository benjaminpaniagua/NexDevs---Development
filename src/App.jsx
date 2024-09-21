import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/ui/NavBar/NavBar.jsx';
import Footer from './components/ui/Footer/Footer.jsx'
import { Landing_Page } from './components/pages/Landing_Page.jsx';
import { Access_Panel } from './components/pages/Access_Panel.jsx';
import { Work_Profiles } from './components/pages/Work_Profiles.jsx';
import { Community_Feed } from './components/pages/Community_Feed.jsx';

const MainApp = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/Access_Panel');

  return (
    <div>
      {showNavbar && <NavBar />}
      <div className={`flex-1 ${showNavbar ? 'mt-[75px]' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/Access_Panel/*" element={<Access_Panel />} />
          <Route path="/WorkProfile/" element={<Work_Profiles />} />
          <Route path="/WorkProfile/:userId" element={<Work_Profiles />} />
          <Route path="/Community_Feed/" element={<Community_Feed />} />
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