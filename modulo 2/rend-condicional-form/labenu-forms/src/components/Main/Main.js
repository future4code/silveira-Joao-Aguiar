import React from 'react';
import styled from 'styled-components';

const Forms = styled.div`
text-align:center;
margin: auto;

`

class MainForm extends React.Component {
    render(){
        return(
            <Forms>
                <h1>Bem Vindo(a) à <br/> LabenuForms!</h1>
                <h3>Vamos começar?</h3>
            </Forms>
        )
    }
}

export default MainForm;