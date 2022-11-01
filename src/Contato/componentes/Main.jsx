import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Main.css';

export default function Main() { 

    const cadForm = async (e) => { 
        const form = e.target;
        e.preventDefault();
        const data = new FormData(form);
        const response = await fetch('http://localhost/php/index.php', {
            method: 'POST',
            body: data
        });
        const json = await response.json();
        setMsg(json.form);
    }
    const email = () => {
        window.open("mailto: lucaslopescesar21@gmail.com");
    }

    const Whatsapp = () => {
        window.open("https://api.whatsapp.com/send?phone=5533998007983");
    }

    const buttonAlert = () => {
        const input = document.getElementsByTagName('input');
        const textarea = document.getElementsByTagName('textarea');
        if (input[0].value === '' || input[1].value === '' || input[2].value === '' || textarea[0].value === '') {
           alert('Preencha todos os campos');
        }else{
            alert('Mensagem enviada com sucesso');
        }
};
    return (
        <div className="ctn">
            <div className="contato">
            <h1 className="txt-contatoh1">Contato</h1>
            <p className="txt-contato">Você pode entrar em contato comigo aqui mesmo.</p>
            </div>
            <div className="form">
                <form onSubmit={cadForm}>
                <input name="nome" type="text" placeholder="Nome" />
                <input name="email" type="text" placeholder="Email" />
                <input name="tel" type="number" placeholder="Telefone" />
                <input name="assunto" type="text" placeholder="Assunto" />
                <textarea name="msg" placeholder="Mensagem" />
                <button onClick={() => buttonAlert()} type="submit">Enviar</button>
                <p className="txt-contato">Ou se preferir.</p>
                </form>
                <h5></h5>
                </div>
                <div className="linksContato">
                <Link onClick={() => Whatsapp()} className="links">WhatsApp</Link>
                <Link onClick={() => email()}className="links">Email</Link>
            </div>
        </div>
    );
}