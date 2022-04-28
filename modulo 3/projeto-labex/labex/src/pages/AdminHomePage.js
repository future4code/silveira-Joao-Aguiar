import styled from "styled-components"
import Footer from "../components/Footer/Footer"
import { useState, useEffect } from "react"
import axios from "axios"


const Container = styled.div`

`

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
color:white;
`

const MenuPainel = styled.div`

`

const Display = styled.div`

`

const Menu = styled.div`
margin-right: 70px;
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
    background-color: #313B64;
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


export default function AdminHome(props){
    const [tripList,setTripList] = useState([])

    const getTrips = ()=> {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-aguiar/trips'
        axios.get(url)
        .then((res)=>{
            setTripList(res.data.trips)
            console.log(tripList)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getTrips()
    },[])

    const trips = tripList.map((trip)=>{
        return (<h3>{trip.name}</h3>)
    })

    return(
        <Container>
            <Header>
                <Logo>
                <h1>LABEX</h1>
                </Logo>
                <Menu>
                    
                </Menu>
            </Header>
            <Section>
                <Display>
                <h1>Painel de controle</h1>
                <MenuPainel>
                    <button>Voltar</button>
                    <button>Criar Viagem</button>
                    <button>Logout</button>
                </MenuPainel>
                <h2>Lista de Viagens</h2>
                {trips}
                </Display>
            </Section>                           
            <Footer/>
        </Container>
    )
}