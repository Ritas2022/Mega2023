import { Routes, Route } from "react-router-dom";
import Lotofacil from "../pages/Lotofacil/Lotofacil";
import MegaSena from "../pages/MegaSena";
import Quina from "../pages/Quina";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="lotofacil" element={<Lotofacil />} />
      <Route path="megasena" element={<MegaSena />} />
      <Route path="quina" element={<Quina />} />
    </Routes>
  );
}
