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
  const [changeWidth, setChangeWidth] = useState(false);
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  console.log("root에서 불러옴", path);

  // useEffect(() => {
  //   const handlewidth = () => {
  //     setChangeWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handlewidth);
  //   return () => {
  //     window.removeEventListener("resize", handlewidth);
  //   };
  // }, []);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");

    setChangeWidth(media.matches);

    const handler = (e) => {
      setChangeWidth(e.matches);
      console.log("이게뭐고?", e.matches);
    };

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);
  console.log("이게뭐고?", changeWidth);

  return (
    <Wrap path={path}>
      <Header path={path} changeWidth={changeWidth} />
      <Routes>
        <Route path="/" element={<Main changeWidth={changeWidth} />} />
        <Route
          path="/news/*"
          element={<News path={path} changeWidth={changeWidth} />}
        />
        <Route
          path="/gameinfo"
          element={<GameInfo path={path} changeWidth={changeWidth} />}
        />
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
