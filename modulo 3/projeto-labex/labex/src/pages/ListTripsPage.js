import styled from "styled-components"
import Footer from "../components/Footer/Footer"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import CardTrip from "../components/Cardtrip/CardTrip"
import axios from "axios"

const Container = styled.div`

`

const Section = styled.section`
min-height:450px;
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
display:flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px 10px 15px rgba(0,0,0);
`


export default function ListTrips(props) {
    const [trips,setTrips] = useState([])
    const nav = useNavigate()


    const setPageHomePage = ()=> {
        nav('/')
    }

    const setPageAppForm = ()=> {
        nav('/AppForm')
    }


    const getTrips = ()=> {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-aguiar/trips'
        axios.get(url)
        .then((res)=>{
            setTrips(res.data.trips)
        })
        .catch((err)=>{

        })
    }

    let tripList = trips.map((trip)=>{
        return (
        <CardTrip
        name={trip.name}
        description={trip.description}
        duration={trip.durationInDays}
        id={trip.id}
        data={trip.date}
        planet={trip.planet}
        />
        )
    })


    useEffect(()=>{
        getTrips()
    },[])

    return (
        <Container>
            <Header>
                <Logo onClick={setPageHomePage}>
                <h1>LABEX</h1>
                </Logo>
                <Menu>
                    <button onClick={setPageAppForm} className="trips">Inscrever-se</button>
                </Menu>
            </Header>
            <Section>
             {tripList}
            </Section>
            <Footer />
        </Container>
    )
}