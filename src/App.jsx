import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Wrap } from "./styles/layout.styled";
import { Route, Router , Routes, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import News from "./pages/News";
import { useEffect, useState } from "react";
import GameInfo from "./pages/GameInfo";
function App() {
  const location = useLocation();
  const [path,setPath] = useState("");
  useEffect(()=> {
    setPath(location.pathname);
  },[location.pathname]);
  console.log("root에서 불러옴",path)

  return (
    <Wrap>
      <Header path={path} />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/news/*" element={<News path={path}/>}></Route>
        <Route path="/gameinfo" element={<GameInfo path={path}/>}></Route>
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
