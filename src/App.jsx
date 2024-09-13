import './index.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/ui/NavBar/NavBar.jsx';
import NavBar_copy from './components/ui/NavBar/NavBar-copy.jsx';
import { Landing_Page } from './components/pages/Landing_Page.jsx';
import { Access_Panel } from './components/pages/Access_Panel.jsx';

const MainApp = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith('/Access_Panel');

  return (
    <div>
      {showNavbar && <NavBar />}
      <div className={`flex-1 ${showNavbar ? 'mt-[0px]' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/Access_Panel/*" element={<Access_Panel />} />
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