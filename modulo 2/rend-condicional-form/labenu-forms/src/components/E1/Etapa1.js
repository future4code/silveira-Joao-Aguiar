import React from 'react';
import styled from 'styled-components';

const Forms = styled.div`
display:flex;
text-align:center;
flex-direction:column;
margin: auto;
width: 95%;

h1{
margin: auto;
padding-bottom:70px
}

input{
border:none;
border-bottom: solid 1px;
margin-bottom:20px;

:focus{
    outline: 0;
    border:none;
    border-bottom: solid 2px;
}
}

select{

:focus{
outline: 0;

}

`

class E1 extends React.Component {
    render(){
        return(
            <Forms>

                <h1>Dados Gerais</h1>
                <input
                placeholder='Nome'
                 type="text"/>
                 <input
                placeholder='Idade'
                 type="number"/>
                 <input
                placeholder='Email'
                 type="email"/>
                 <h4>Escolaridade</h4>
                 <select>
                     <option value='Ensino médio Incompleto'>Ensino médio Incompleto</option>
                     <option value='Ensino médio Completo'>Ensino médio Completo</option>
                     <option value='Ensino superior Incompleto'>Ensino superior Incompleto</option>
                     <option value='Ensino superior Completo'>Ensino superior Completo</option>
                 </select>
            </Forms>
        )
    }
}

export default E1;