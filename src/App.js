// IMPORTING NECESSARY DEPENDENCIES

import "./style.scss";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import NavigationSection from "./components/NavigationSection/NavigationSection";

import { Route, HashRouter as Router, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import AboutMe from "./components/About/AboutMe";
import FooterSection from "./components/FooterSection/FooterSection";
import Layout from "./layout/Layout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="app">
          <Router>
            <NavigationSection />
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/about" element={<AboutMe />} />
            </Routes>
            <FooterSection />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
