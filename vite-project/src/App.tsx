import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToastLayout from "./toast-layout";
import Sidebar from "@/screens/sidebar";
import LayoutContext from "./components/layout/layoutContext";
import LoginPage from "./screens/login";

function App() {
  return (
    <Router>
      <LayoutContext>
        <ToastLayout />
        <div style={{ display: "flex", height: '100vh' }}>
          <Sidebar />
          <main
            style={{ flexGrow: 1}}
            className="mt-[70px] md:mt-[5px] ml-0 md:ml-[200px]"
          >
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              {/* Uncomment to use other routes */}
              {/* <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} /> */}
            </Routes>
          </main>
        </div>
      </LayoutContext>
    </Router>
  );
}

export default App;
