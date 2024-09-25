import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToastLayout from "./toast-layout";
import Sidebar from "@/screens/sidebar";
import LayoutContext from "./components/layout/layoutContext";
import LoginPage from "./screens/login";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowAltCircleUp } from "react-icons/fa";
import ScrollToTopButton from "./components/scrollToTopButton";

function App() {
  return (
    <Router>
      <LayoutContext>
        <ToastLayout />
        <div style={{ display: "flex", height: '100vh' }}>
          <Sidebar />
          <main
           style={{ flexGrow: 1, height: '100%' }}
            className="mt-[70px] md:mt-[5px] ml-0 md:ml-[200px]"
          >
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              {/* Uncomment to use other routes */}
              {/* <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} /> */}
            </Routes>
            {/* <ScrollToTop 
              smooth 
              component={<FaArrowAltCircleUp size={30} />}
              style={{ backgroundColor: '#4F46E5', borderRadius: '100%', color: '#FFF', boxShadow: '0 2px 5px rgba(0,0,0,0.3)' }} 
            /> */}
            <ScrollToTopButton/>
          </main>
        </div>
      </LayoutContext>
    </Router>
  );
}

export default App;
