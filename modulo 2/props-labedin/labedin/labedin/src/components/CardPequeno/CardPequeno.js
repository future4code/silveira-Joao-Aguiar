import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem}/>
            <div>                
                <h5>{props.info}</h5>
            </div>
        </div>
    )
}

export default CardPequeno;