import React from "react";
import './curriculo.css';
import Header from "../../Home/components/Header";
import Footer from "../../Home/components/Footer";

export default function Curriculo() {
    return (
        <div className='Curriculo'>
            <Header />
            <img src="curriculo.png" alt="Curriculo" className="Curriculo-img" />
            <Footer />
        </div>
    );
}