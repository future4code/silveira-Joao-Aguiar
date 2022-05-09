import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export function Login(){
const nav = useNavigate()

const setPageSignUp = ()=> {
    nav('signup')
}

    return(
        <div>
            <h1> Login </h1>
            <input placeholder='nome' type='text' />
            <input placeholder='senha' type='text' />
            <button>Continuar</button>
            <button onClick={setPageSignUp}>Crie uma conta</button>
        </div>
    )
}