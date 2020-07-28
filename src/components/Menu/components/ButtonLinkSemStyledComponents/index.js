import React from 'react';

export default function ButtonLink(props){
        //  props => { className: "Nome da classe", href :"Link"} 
        // Sao informacoes que podem ser passadas para um componente
        //Pode ser uma string, um numero ou ate mesmo uma funcao

        console.log(props)

    return(
        <a href="/" className={props.className}>
             {props.children}
         </a>
    )
}