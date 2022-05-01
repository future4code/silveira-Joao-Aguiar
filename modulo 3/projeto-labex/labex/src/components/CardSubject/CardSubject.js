import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
`

const Menu = styled.div`
display:flex;

button{
    width:100%;
    height:30px;
    border:none;
    font-size: 15px;
    font-weight: bold;
    color: white;
    cursor: pointer;
}

.aproved{
    background-color: green;
}

.disaproved{
    background-color: red;
}


`

const Display = styled.div`
margin: 20px;
border: solid 1px;
border-radius: 5px;
overflow: hidden;

h3{
    text-align: center;
}
`


export default function CardSubject(props){
    

    return(
        <Container>
            <Display >
                <h3>{props.nome}</h3>
                <h5>Texto para aplicação:<br/>{props.textoAplicacao}</h5>
                <h5>Idade: {props.idade}</h5>
                <h5>Profissão: {props.profissao}</h5>
                <h5>País: {props.pais}</h5>
                <Menu>
                    <button onClick={()=>{props.approve(true,props.id)}} className="aproved">Aprovado</button>
                    <button onClick={()=>{props.approve(false,props.id)}} className="disaproved">Desaprovado</button>
                </Menu>
            </Display>
        </Container>
    )
}