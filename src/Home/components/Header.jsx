import './Header.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {


    return (
            <div className='header'>
                <Link to="/" className='h1-header'>Lu<span className='span-lucas'>cas</span></Link>
                <Link to="/Sobre" className='txt-header'>Sobre</Link>
                <Link to="/Contato" className='txt-header'>Contato</Link>
                <Link to="/Projetos" className='txt-header'>Projetos</Link>
        </div>
    );
}