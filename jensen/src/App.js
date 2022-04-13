import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sara from "./components/pages/sara/Sara";
import NoPage from "./components/pages/NoPage";
import Info from "./components/pages/Bomi/Info";
import InfoB from "./components/pages/Bomi/InfoB";
import Erik from "./components/pages/erik/Erik";


import Kristofer from "./components/Kristofer";
import Loggain from "./components/Loggain";
import SkolaPrivate from "./components/SkolaPrivate";


import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";


function App() {
  return (

    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="sara" element={<Sara />} />
          <Route path="bomi" element={<Info />} />
          <Route path="bomi/InfoB" element={<InfoB />} />
          <Route path="kristofer" element={<Kristofer />} />
          <Route path="kristofer/login" element={<Loggain />} />
          <Route path="kristofer/admin" element={<SkolaPrivate />} />
           <Route path="erik" element={<Erik />} /> 
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />

    </BrowserRouter>


  );
}

export default App;
