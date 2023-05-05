import { NextPage } from "next";

type HeaderProps = {
    sair(): void,
    showModal():void
}

export const Header : NextPage<HeaderProps> = ({sair, showModal}) => {

    const mobile = window.innerWidth < 954;

    const userName = localStorage.getItem('name');
    const firstName = userName?.split(' ')[0] || 'Sem nome';

    return (
        <div className="container-header">
            <img src="logo.svg" alt="Logo Fiap" className="logo"/>
            <button onClick={showModal}><strong>+</strong> Adicionar tarefa</button>
            <div>
                <span>Olá, {firstName}</span>
                <img src={mobile ? 'exit-mobile.svg' : 'exit-desktop.svg'} onClick={sair} alt="Sair" />
            </div>
        </div>
    )
}