import React from "react";
import './Footer.css';
import { Link, NavLink } from "react-router-dom";

const twitter = () => { 
    window.open("https://twitter.com/lucasloq");
}
const Instagram = () => {
    window.open("https://www.instagram.com/lk.lpps/");
}
const linkedin = () => {
    window.open("https://www.linkedin.com/in/lucas-c%C3%A9sar-lopes-77929a17a/");
}
const github = () => {
    window.open("https://github.com/LucasSpott");
}
const Facebook = () => {
    window.open("https://www.facebook.com/profile.php?id=100050890122860");
}

const email = () => {
    window.open("mailto: lucaslopescesar21@gmail.com");
}
const Telefone = () => {
    window.open("tel: +55 33 9 9800-7983");
}
const Whatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=5533998007983");
}
const projetoSpotify = () => {
    window.open("https://github.com/LucasSpott/Spotify-Clone");
}
const projetoDragon = () => {
    window.open("https://github.com/LucasSpott/DragonScience");
}

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
            <div className='RedesSociais'>
            <h1 className='h1-footer'>Redes Sociais</h1>
            <Link onClick={() => twitter()} className="p-footer">Twitter</Link>
            <Link onClick={() => Instagram()} className="p-footer">Instagram</Link>
            <Link onClick={() => Facebook()} className="p-footer">Facebook</Link>
            <Link onClick={() => linkedin()} className="p-footer">LinkedIn</Link>
            <Link onClick={() => github()} className="p-footer">GitHub</Link>
            </div>
            <div className='Contato'>
            <h1 className='h1-footer'>Contato</h1>
            <Link onClick={() => email()} className="p-footer">Email</Link>
            <Link onClick={() => Telefone()} className="p-footer">Telefone</Link>
            <Link onClick={() => Whatsapp()} className="p-footer">Whatsapp</Link>
            </div>
            <div className="Sobre">
            <h1 className='h1-footer'>Sobre</h1>
            <Link to={"/Sobre"} className="p-footer">Sobre</Link>
            <Link className="p-footer">Curriculo</Link>
            </div>
            <div className="Projetos">
            <h1 className='h1-footer'>Projetos</h1>
            <Link onClick={() => projetoSpotify()} className="p-footer">Projeto Spotify</Link>
            <Link onClick={() => projetoDragon()} className="p-footer">DragonScience</Link>
            <Link onClick={() => github()} className="p-footer">Demais</Link>
            </div>
            </div>
            <p className="p-lucas">©Criado e Desenvolvido por Lucas, 2022 Lucas</p>
        </div>
    );
}