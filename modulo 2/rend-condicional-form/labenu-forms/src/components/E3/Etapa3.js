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

class E3 extends React.Component {
    render(){
        return(
            <Forms>
                <h1>Informações gerais de ensino</h1> 
                <input
                placeholder='Por que você não terminou um curso de graduação?'
                 type="text"/>
                 <input
                placeholder='Você fez algum curso complementar?'
                 type="text"/>
                  

            </Forms>
        )
    }
}

export default E3;