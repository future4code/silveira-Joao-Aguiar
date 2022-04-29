import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
`

const Menu = styled.div`

`

const Display = styled.div`
margin: 10px;
border: solid 1px;
border-radius: 5px;
`


export default function CardSubject(props){
    

    return(
        <Container>
            <Display >
                <h3>{props.nome}</h3>
                <h5>Texto para aplucação:<br/>{props.textoAplicacao}</h5>
                <h5>Idade: {props.idade}</h5>
                <h5>Profissão: {props.profissao}</h5>
                <h5>País: {props.pais}</h5>
                <Menu>
                    <button>Aprovado</button>
                    <button>Desaprovado</button>
                </Menu>
            </Display>
        </Container>
    )
}