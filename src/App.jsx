import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./utils/AuthProvider.jsx";
import NavBar from "./components/ui/NavBar/NavBar.jsx";
import Footer from "./components/ui/Footer/Footer.jsx";
import { Landing_Page } from "./components/pages/Landing_Page.jsx";
import { Access_Panel } from "./components/pages/Access_Panel.jsx";
import { Work_Profiles } from "./components/pages/Work_Profiles.jsx";
import Categories_Page from "./components/pages/Categories_Page.jsx";
import { Community_Feed } from "./components/pages/Community_Feed.jsx";
import { Error_404, Error_503 } from "./components/pages/Errors.jsx";
import { Modal_Post } from "./components/ui/Modal_Post/Modal_Post.jsx";
import { Community_Posts } from "./components/community_feed_components/Community_Posts.jsx";
import { Profiles_List } from "./components/pages/Profiles_List.jsx";
import { useScrollToTop } from "./hooks/useScrollToTop.js";
import { Posts_List } from "./components/pages/Posts_List.jsx";
import { AboutUs } from "./components/pages/AboutUs.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import TermsAndConditions from "./components/pages/TermsAndConditions.jsx";
import Services from "./components/pages/Services.jsx";
import FaqPage from "./components/pages/FaqPage.jsx";

const MainApp = () => {
  useScrollToTop();
  const location = useLocation();
  const showNavbar = !location.pathname.startsWith("/Access_Panel");

  return (
    <div>
      {showNavbar && <NavBar />}
      <div className={`flex-1 ${showNavbar ? "mt-[75px]" : ""}`}>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/access_panel/*" element={<Access_Panel />} />
          <Route path="/categories/" element={<Categories_Page />} />
          <Route path="/profiles/" element={<Profiles_List />} />
          <Route path="/workProfile/:userId" element={<Work_Profiles />} />
          <Route path="/community_feed/" element={<Community_Feed />} />
          <Route path="*" element={<Error_404 />} />
          <Route path="/error503" element={<Error_503 />} />
          <Route path="/post" element={<Modal_Post />} />
          <Route path="/posts" element={<Posts_List />} />

          {/* Footer routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </div>
      {showNavbar && <Footer />}
    </div>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <MainApp />
    </Router>
  </AuthProvider>
);

export default App;
