import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Main } from "./Routes";
import Home from "../pages/Home";
import TiposTratamento from "../pages/TiposTratamento";
import SobreMim from "../pages/SobreMim";
import Contato from "../pages/Contato";
import Depoimentos from "../pages/Depoimentos";
import Psicoterapia from "../pages/Psicoterapia";
import InstagramCards from "../pages/Feed";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psicoterapia" element={<Psicoterapia />} />
          <Route path="/tratamentos" element={<TiposTratamento />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/feed" element={<InstagramCards />} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </Main>
  );
}
