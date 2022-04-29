import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer/Footer"
import axios from "axios"
import CardSubject from "../components/CardSubject/CardSubject"

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


const Container = styled.div`

`

const Info = styled.div`
display:flex;
flex-direction: column;
margin: 10px;

div{
    margin auto;
    display:flex;
    justify-content: space-arround;
}
`

const Section = styled.section`
display: flex;
justify-content: center;
align-items:center;
`

const Display = styled.div`
width: 60%;
margin: 20px;
border-radius: 5px;
background-color: white;
text-align: left;

h1{
    text-align: center;
}

h5{
    text-align: center;
    margin: 10px;
}

p{
    margin: 10px;
}
`

const Candidatos = styled.div`
border-top: solid 2px;
`


export default function TripsDetail(props){
    const [trip,setTrip] = useState({})
    const [candidates,setCandiddates] = useState([])
    const params = useParams()
    const nav = useNavigate()
    const candidato = candidates.map((candidato)=>{
        return (
            <CardSubject
                key={candidato.id}
                nome={candidato.name}
                textoAplicacao={candidato.applicationText}
                profissao={candidato.profession}
                idade={candidato.age}
                pais={candidato.country}
                id={candidato.id}
            />
        )
    })


    const setPageHomePage = ()=> {
        nav('/')
    }

    const setPageAdminHome = ()=> {
        nav('/AdminHome')
    }

    const getTripDetails = ()=> {
        const header = {
            headers:{
                auth: localStorage.getItem('token')
            }
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-aguiar/trip/${params.id}`

        axios.get(url,header)
        .then((res)=>{
            setTrip(res.data.trip)
            setCandiddates(res.data.trip.candidates)
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    useEffect(()=>{
        getTripDetails()
    },[])




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
                    <Info>
                    <h1>{trip.name}</h1>
                    <h5>{trip.description}</h5>
                    <div>
                    <p>Data: {trip.date}</p>
                    <p>Planeta: {trip.planet}</p> 
                    <p>Duração: {trip.durationInDays}</p>
                    </div>
                    </Info>
                    <Candidatos>
                    <h2>Candidatos</h2>
                    {candidato}
                    </Candidatos>
                </Display>
            </Section>                          
            <Footer/>
        </Container>
    )
}