import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer/Footer"


const Container = styled.div`

`

const Forms = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
margin-bottom: 20px;
input{
    height: 30px;
    margin: 10px;
}
`

const Section = styled.section`
display: flex;
justify-content: center;
`

const Display = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    flex-direction: column;
    margin: 20px;
    width: 50%;
    
    border-radius: 10px;
    overflow: hidden;

    button{
        font-size: 17px;
        font-weight: bold;
        height: 35px;
        border: none;
        background-color: #8F85D8;
        cursor: pointer;
        color: White;
    }

    h1{
        text-align: center;
    }
`

const Menu = styled.div`
button{
    height: 35px;
    margin: 5px;
    font-size:18px;
    color: white;
    font-family: 'Oxygen', sans-serif;
    font-weight:bold;
    cursor: pointer;
}

.trips{
    border:none;
    border-radius: 10px;
    width:150px;
    height:30px;
    background-color: #313B64;
    color:White;
    font-size: 20px;
    cursor: pointer;
    margin-right: 70px;
}
`

const Header = styled.header`
position:relative;
display:flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px 10px 15px rgba(0,0,0,0.6);
`

const Logo = styled.div`
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-left: 20px;
color:white;
font-size: 23px;
font-family: 'Bord';
`


export default function CreateTrip(props){
    const [nome,setNome] = useState()
    const [planeta,setPlaneta] = useState()
    const [data,setData] = useState()
    const [descricao,setDescricao] = useState()
    const [duracao,setDuracao] = useState()
    const nav = useNavigate()

    const onChangeNome = (e)=> {
        setNome(e.target.value)
    }

    const onChangePlaneta = (e)=> {
        setPlaneta(e.target.value)
    }

    const onChangeData = (e)=> {
        setData(e.target.value)
    }

    const onChangeDescricao = (e)=> {
        setDescricao(e.target.value)
    }

    const onChangeDuracao = (e)=> {
        setDuracao(e.target.value)
    }

    const setPageHomePage = ()=>{
        nav('/')
    }

    const setPageAdminHome = ()=>{
        nav('/AdminHome')
    }

    const createTrip = ()=> {
        
        const header = {
            headers:{
                auth: localStorage.getItem('token')
            }
        }

        const body = {
            name: nome,
            planet: planeta,
            date: data,
            description: descricao,
            durationInDays: duracao
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-aguiar/trips`

        axios.post(url,body,header)
        .then((res)=>{
            alert('Viagem criada com sucesso')
            nav('/AdminHome')
        })
        .catch((err)=>{
            alert('ocorreu um erro')
        })
    }

    return(
        <Container>
            <Header>
                <Logo>
                    <h1 onClick={setPageHomePage}>LABEX</h1>
                </Logo>
                <Menu>
                    <button onClick={setPageAdminHome} className="trips">Voltar</button>
                </Menu>
            </Header>         
                <Section>
                    <Display>
                        <h1>Criar Viagem</h1>
                        <Forms>
                        <input onChange={onChangeNome} placeholder="nome" value={nome}/>
                        <input onChange={onChangePlaneta} placeholder="planeta" value={planeta}/>
                        <input type={'date'} onChange={onChangeData} placeholder="data" value={data}/>
                        <input onChange={onChangeDescricao} placeholder="descrição" value={descricao}/>
                        <input type={'number'} onChange={onChangeDuracao} placeholder="duração" value={duracao}/>
                        </Forms>
                        <button onClick={createTrip}>Criar</button>
                    </Display>
                </Section>
        </Container>
    )
}