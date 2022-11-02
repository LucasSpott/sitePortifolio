import './Header.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const Element = document.getElementById('header');
    if(Element){
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0){
                Element.classList.add('header-active');
            }else{
                Element.classList.remove('header-active');
            }
        });
    }

    return (
            <div className='header'>
                <Link to="/" className='h1-header'>Lu<span className='span-lucas'>cas</span></Link>
                <Link to="/Sobre" className='txt-header'>Sobre</Link>
                <Link to="/Contato" className='txt-header'>Contato</Link>
                <Link to="/Projetos" className='txt-header'>Projetos</Link>
        </div>
    );
}