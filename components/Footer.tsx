import { NextPage } from "next";

type FooterProps = {
    showModal():void
}

export const Footer:NextPage<FooterProps> = ({showModal}) => {

    return (
        <div className="container-footer">
            <button onClick={showModal}> <img src="+.svg" alt="" />Adicionar uma tarefa </button>
            <div className="copyright">© Copyright 2021. Todos os direitos reservados.</div>
        </div>
    )
}