import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { corNeutra, corPrimaria } from '../constants/colors'
import { Navigation } from '../routes/cordinator'
import { useState } from 'react'
import { BASE_URL } from '../constants/urls'


const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

.copywrite{
    text-align: center;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
}
`
const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: ${corPrimaria};
box-shadow: 0px 0px 10px;

h1{
    margin-left: 30px;
}

button{
    border: none;
    border-radius: 10px;
    width: 160px;
    height: 35px;
    margin-right: 30px;
    background-color: ${corNeutra};
    color: white;
    font-size: 20px;
}
`

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;

`

const Terms = styled.div`
width: 80%;
margin-top: 20px;
`

const Inputs = styled.div`
display: flex;
flex-direction: column;
width: 80%;
gap: 10px;

input{
    height: 35px;
    border: none;
    border-bottom: solid 1px;
}
`

const Buttons = styled.div`
width: 80%;
button{
    width: 100%;
    height: 35px;
    margin-top: 60px;
    border: none;
    border-radius: 20px;
    background-color: ${corNeutra};
    color: white;
    font-size: 20px;
}
`

export function SignUp() {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const nav = useNavigate()

    const enviar = (e) => {
        e.preventDefault()
        const BODY = {
            username: user,
            email: email,
            password: senha
        }

        if(senha.length < 8){
            alert('sua senha precisa ter no mínimo 8 diditos')
        }
        else{
            axios.post(`${BASE_URL}/users/signup`, BODY)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                Navigation(nav, '/')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    const onChangeUser = (e) => {
        setUser(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeSenha = (e) => {
        setSenha(e.target.value)
    }

    return (
        <Container>
            <Header>
                <h1>Labedit</h1>
                <button onClick={() => Navigation(nav, '/')}>Entrar</button>
            </Header>
            <h1 className='copywrite'>Olá,boas vindas ao Labedit</h1>
            <form onSubmit={enviar}>
                <Inputs>
                    <input value={user}
                        onChange={onChangeUser}
                        required placeholder='nome de usuário'
                        type='text' />

                    <input value={email}
                        onChange={onChangeEmail}
                        required placeholder='email'
                        type='email' />

                    <input value={senha}
                        onChange={onChangeSenha}
                        required placeholder='senha'
                        type='password' />
                </Inputs>
                <Terms>
                    <p>Ao continuar,você concorda com o nosso
                        <a href=''>contrato de usuário</a>
                        e nossa <a href=''>política de privacidade</a></p>
                    <Box>
                        <input type='checkbox' />
                        <p>Eu concordo em receber emails sobre coisas legais no Labedit</p>
                    </Box>
                </Terms>
                <Buttons>
                    <button type='submit'>Cadastrar</button>
                </Buttons>
            </form>
        </Container>
    )
}