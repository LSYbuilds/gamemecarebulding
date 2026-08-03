import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Wrap } from "./styles/layout.styled";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";
import { use, useEffect, useRef, useState } from "react";
import GameInfo from "./pages/GameInfo";
function App() {
  const location = useLocation();
  const [path, setPath] = useState("");
  const [changeWidth, setChangeWidth] = useState(window.innerWidth);
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  console.log("root에서 불러옴", path);

  useEffect(() => {
    const handlewidth = () => {
      setChangeWidth(window.innerWidth);
    };
    window.addEventListener("resize", handlewidth);
    return () => {
      window.removeEventListener("resize", handlewidth);
    };
  }, []);

  return (
    <Wrap path={path}>
      <Header path={path} changeWidth={changeWidth} />
      <Routes>
        <Route path="/" element={<Main changeWidth={changeWidth} />}></Route>
        <Route
          path="/news/*"
          element={<News path={path} changeWidth={changeWidth} />}
        ></Route>
        <Route path="/gameinfo" element={<GameInfo path={path} />}></Route>
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
