import Header from "./components/Header";
import Footer from "./components/Footer";
import { Wrap } from "./styles/layout.styled";
import { Route, Router , Routes } from "react-router-dom";
import Main from "./pages/Main";
function App() {
  return (
    <Wrap>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
