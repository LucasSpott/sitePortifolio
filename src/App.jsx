import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Contato from "./Contato/Contato";
import Sobre from "./Sobre/Sobre";
import Projetos from "./Projetos/Projetos";
import Curriculo from "./Sobre/curriculoSession/Curriculo";


export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Projetos" element={<Projetos />} />
            <Route path="/Curriculo" element={<Curriculo />} />
        </Routes>
        </BrowserRouter>
    );
    }