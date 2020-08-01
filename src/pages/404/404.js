import React from 'react';
import PageDefault from '../../components/PageDefault';

export default function Pag404(){
    return(
        <div className="container-fluid">
            <PageDefault />

            <iframe title="Iframe Game pagina 404" src="https://mariosouto.com/flappy-bird-devsoutinho/" width="100%" height="600"></iframe>
            <PageDefault />
        </div>
    )
}