import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CountryDetails from "./pages/countryDeatails/CountryDetails";
import Home from "./pages/home/Home";
import Error404 from "./pages/error404/Error404";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [lightMode, setLightMode] = useState(() => {
    const userMode = JSON.parse(localStorage.getItem("userMode"));
    return userMode || false;
  });

  useEffect(() => {
    // update  the localstorage to match the current mode
    const root = document.querySelector("#root");
    if (lightMode) {
      root.classList.add("light-mode");
    } else {
      root.classList.remove("light-mode");
    }
    localStorage.setItem("userMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <>
      <BrowserRouter>
        <Navbar lightMode={lightMode} setLightMode={setLightMode} />
        <Routes>
          <Route path="/" element={<Home lightMode={lightMode} />} />
          <Route
            path="/detail/:countryName"
            element={<CountryDetails lightMode={lightMode} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
