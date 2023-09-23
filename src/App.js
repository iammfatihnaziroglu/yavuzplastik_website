import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/HF/Header";

import { StickNavStyle } from "./StickyNavStyle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import Products from "./pages/Products";
import MobileHeader from "./components/HF/MobileHeader";
import useWindowSize from "./utit/useWindowSize";
import MobileProducts from "./pages/MobileProducts";

import Admin from "./pages/Admin/Admin";
const App = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  const { width } = useWindowSize();

  return (
    <div>
      {StickNavStyle()}
      {pathname === "/main" ? null : width <= 768 ? (
        <MobileHeader />
      ) : (
        <Header />
      )}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={pathname}>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/products"
            element={width <= 768 ? <MobileProducts /> : <Products />}
          />

          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
