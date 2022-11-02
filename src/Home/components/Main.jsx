import './Main.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fileDownload from 'js-file-download';

const handleClick = (url, filename) => {
    filename = 'curriculo.pdf';
    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            fileDownload(blob, filename);
            
        });
};


export default function Main() {
    const [aninSpan, setAninSpan] = useState(true);

            useEffect(() => {
                setTimeout(() => {
                    setAninSpan((aninSpan) => 'Proeficiente');
                }, 2200);
                if(aninSpan === 'Proeficiente'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Ótimo trabalho em equipe');
                    }, 2200);
                }
                if(aninSpan === 'Ótimo trabalho em equipe'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Criativo');
                    }, 2200);
                }
                if(aninSpan === 'Criativo'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Adoro aprender');
                    }, 2200);
                }
                if(aninSpan === 'Adoro aprender'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Comunicativo');
                    }, 2200);
                }
                if(aninSpan === 'Comunicativo'){
                    setTimeout(() => {
                        setAninSpan((aninSpan) => 'Organizado');
                    }
                    , 2200);
                }

            }, [aninSpan]);
        
        function handleClick() {
            window.open('WhatsApp://send?text=Olá Lucas, quero marcar uma entrevista&phone=+5533998007983');
        }

    return ( 
    <main className='main-content'>
        <div className='main'>
            <div className='main-text'>
            <h6 className='h6-main'>Estudante de Engenharia de Software</h6>
            <h1 className='h1-main'>Olá eu sou o Lucas</h1>
            <p className='p-main'>Procuro uma oportunidade de estágio em sua empresa para pegar experiência. 
            Sou um estudante de Engenharia de Software, tenho 19 anos e estou no 2° período mas 
            já conheço a área a mais de 2 anos.
            Sou uma pessoa que gosta de aprender coisas novas,
            sou comunicativo, organizado, criativo, proeficiente, ótimo trabalho em equipe e adoro aprender.
            </p>
            <h2 className='aninSpan'>{aninSpan}</h2>
            </div>
            <div className='div-button'>
                <Link className='button-file' onClick={() => handleClick('curriculo.pdf')}>Baixar Curriculo</Link>
            </div>
            </div>
            <div className='whappAbsolute'>
                <Link onClick={() => handleClick()}><img className='wppImag' src='https://img.icons8.com/doodle/74/000000/whatsapp.png'alt="whatsapp" /></Link>
            </div>
            <div className='Linguagem'>
            <h1 className='h1-linguagem'>Linguagens</h1>
            <div className='div-linguagem'>
            <div className='div-linguagem1'>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/javascript.png'/>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/html-5--v1.png'/>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/css3.png'/>
            <img className='img-linguagem' src="https://img.icons8.com/plasticine/100/000000/react.png"/>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/nodejs.png'/>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/mysql.png'/>
            </div>
            <div className='div-linguagem2'>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/django.png'/>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/python.png'/>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/git.png'/>
            <img className='img-linguagem' src='https://img.icons8.com/color/100/000000/php.png'/>
            </div>
            </div>
            </div>
            </main>
            
        
    );
}