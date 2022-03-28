import React from 'react';
import styled from 'styled-components';

const Forms = styled.div`
text-align:center;
margin: auto;

`

class Final extends React.Component {
    render(){
        return(
            <Forms>
                <h1>O formulario Acabou!</h1>
                <h3>Muito obrigado por participar! Entraremos em contato!</h3>  
            </Forms>
        )
    }
}

export default Final;