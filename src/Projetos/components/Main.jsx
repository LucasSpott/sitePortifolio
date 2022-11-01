import React from "react";
import './Main.css';
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="mainProject">
           
        <div className="projects">
            
            <div className="projectsText">
                <h1 className="txt-Projecth1">Projeto Dragon Science</h1>
                <p className="txt-Project">
                    O projeto Dragon Science é um projeto front-end e back-end em 
                    React JS e Firebase, onde o usuário pode criar uma conta, fazer login,
                    criar um perfil, criar um projeto, editar um projeto, deletar um projeto,
                    assistir aulas, fazer testes, ver o ranking de projetos, ver o ranking de
                    o projeto ainda está em andamanto, mas você pode ver no GitHub um pouco sobre.
                </p>
                <p className="txt-Project">
                    Ele foi feito por mim mesmo, e eu fiz o design do site, design do logo, back-end, etc.
                    O projeto é um site de ensino, que tem como objetivo ensinar programação para o público em geral.
                    Foi feito afim de estudo e aprendizado, e também para ajudar as pessoas que querem aprender programação.
                </p>
            </div>
            <img className="dragonRecorder" src="RECORDER.gif" alt="RECORDES" />
            </div>
            <div className="projects2">
            <img className="spotifyGift" src="spotify.gif" alt="SPOTIFY" />
            <div className="projectsText2">
                <h1 className="txt-Projecth12">Projeto Spotify</h1>
                <p className="txt-Project">
                    Projeto básico em HTML, CSS para afim de estudo quando comecei a aprender programação.
                    </p>
            </div>
            
            </div>
            <div className="maisaqui">
            <Link className="linkGit">Mais aqui.</Link>
            </div>
        </div>
    );
}