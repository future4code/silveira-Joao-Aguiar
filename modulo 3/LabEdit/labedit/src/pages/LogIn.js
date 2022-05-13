import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Navigation } from '../routes/cordinator'
import { corNeutra, corPrimaria, corSecundaria } from '../constants/colors'
import { BASE_URL } from '../constants/urls'



const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

form{
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    width: 100%;
}
`

const Logo = styled.div`
text-align: center;
background-color: ${corPrimaria};
color: white;
width: 100%;

h1{
    margin: 0;
}
p{
    margin: 0;
    margin-bottom: 20px;
}

.madeBy{
    font-size: 15px;
}
`

const Display = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`

const Inputs = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 80%;
margin-bottom: 50px;

input{
    border: none;
    border-bottom: solid 1px;
    width: 100%;
    height: 30px;
}
`

const Buttons = styled.div`
width: 80%;
display: flex;
flex-direction: column;

hr{
    width: 100%;
    background-color: ${corNeutra};
}

button{
    height: 35px;
    border: none;
    border-radius: 20px;
    margin: 5px;
    background-color: ${corNeutra};
    color: white;
}
`


export function Login() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const nav = useNavigate()


    const fazerLogin = (e) => {
        e.preventDefault()
        const BODY = {
            email: nome,
	        password: senha 
        }

        axios.post(`${BASE_URL}/users/login`,BODY)
        .then((res)=>{
            localStorage.setItem('token',res.data.token)
            Navigation(nav,'/mainPage')
        })
        .catch((err)=>{
            console.log(err)
            if(err.response.status === 422){
                alert('Seu email ou senha esão incorretos')
            }else{
                alert(`Ocorreu um erro: ${err.message}`)
            }
        })
    }

    const onChangeNome = (e) => {
        setNome(e.target.value)
    }

    const onChangeSenha = (e) => {
        setSenha(e.target.value)
    }
    
    return (
        <Container>
            <Logo>
                
                <h1> Labedit </h1>
                <p>O projeto de rede social da Labenu</p>
                <p className='madeBy'>{`made by @jmaraguiar`}</p>
            </Logo>
            <Display>
                <form onSubmit={fazerLogin}>
                    <Inputs>
                        <input value={nome}
                         onChange={onChangeNome}
                         required placeholder='email' 
                         type='email' />

                        <input value={senha} 
                        onChange={onChangeSenha} 
                        required placeholder='senha' 
                        type='password' />
                    </Inputs>
                    <Buttons>
                        <button type='submit'>Continuar</button>
                        <hr />
                    </Buttons>
                </form>
                <Buttons>
                    <button onClick={()=> Navigation(nav,'signup')}>Crie uma conta</button>
                </Buttons>
            </Display>
        </Container>
    )
}