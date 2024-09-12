import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing_Page } from './components/pages/Landing_Page.jsx';
import { Access_Panel } from './components/pages/Access_Panel.jsx';
import { Modal_Profile } from './components/ui/Modal_Profile/Modal_Profile.jsx';

export function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/Access_Panel/*" element={<Access_Panel />} />
          <Route path="/Modal_Profile_Panel/*" element={<Modal_Profile />} />
        </Routes>
      </Router>
  )
}
