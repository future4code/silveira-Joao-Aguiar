import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export function SignUp(){
    const nav = useNavigate()
    const setPageLogin = ()=> {
        nav('/')
    }

    return(
        <div>
            <h1> Sign Up </h1>
            <button onClick={setPageLogin}>login</button>
        </div>
    )
}