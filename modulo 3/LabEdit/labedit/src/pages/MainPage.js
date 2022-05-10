import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Navigation } from "../routes/cordinator"
import { corNeutra, corPrimaria, corSecundaria } from '../constants/colors'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Posts = styled.div`

`


const Header = styled.header`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
background-color: ${corPrimaria};
`

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;

hr{
    width: 100%;
}

form{
    width: 80%;
    display: flex;
    flex-direction: column;

    textarea{
        border-radius: 10px;
        margin-bottom: 10px;
        height: 120px;
    }

    button{
        border: none;
        border-radius: 20px;
        margin-bottom: 10px;
        height: 35px;
        background-color: ${corNeutra};
        color: white;
    }
}
`



export function MainPage() {
    const nav = useNavigate()
    const params = useParams()

const logOut = ()=>{
    localStorage.removeItem('token')
    Navigation(nav,'/')
}

const test = ()=>{
    let valor = localStorage.getItem('token')
    console.log(valor)
}

const postar = (e)=>{
    e.preventDefault()
}
    return (
        <Container>
            <Header>
            <p>Logo</p>
            <button onClick={logOut}>logout</button>
            </Header>
            <Section>
                <form onSubmit={postar}>
                    <textarea placeholder="escreva seu post..."/>
                    <button onClick={test}>Postar</button>
                </form>
                <hr/>
                <Posts>
                    <h1>Posts</h1>
                </Posts>
            </Section>  
        </Container>
    )
}