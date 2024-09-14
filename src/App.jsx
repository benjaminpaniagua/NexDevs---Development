import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/ui/NavBar/NavBar.jsx';
import { Landing_Page } from './components/pages/Landing_Page.jsx';
import { Access_Panel } from './components/pages/Access_Panel.jsx';
import { Work_Profiles } from './components/pages/Work_Profiles.jsx';

const MainApp = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/Access_Panel');

  return (
    <div>
      {showNavbar && <NavBar />}
      <div className={`flex-1 ${showNavbar ? 'mt-[104px]' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/Access_Panel/*" element={<Access_Panel />} />
          <Route path="/WorkProfile/" element={<Work_Profiles />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <MainApp />
  </Router>
);

export default App;