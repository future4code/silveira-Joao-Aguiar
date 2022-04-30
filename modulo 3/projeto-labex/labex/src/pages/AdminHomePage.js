import styled from "styled-components"
import Footer from "../components/Footer/Footer"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import CardTripAdimin from "../components/CardTripAdmin/CardtripAdmin"


const Container = styled.div`
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


const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
color:white;
text-align: center;
margin: 25px;

h1{
    margin: 20px;
}

h2{
    margin: 20px;
}
`

const MenuPainel = styled.div`
display:flex;
padding: 10px;
justify-content: center;
align-items:center;
background-color: #8F85D8;
border-radius: 5px;
width:130%;
height: 40px;

.trips{
    margin-right: 0;S
}
`

const Display = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`

const List = styled.div`
width 130%;
margin-right: 17px;
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


export default function AdminHome(props) {
    const [tripList, setTripList] = useState([])
    const nav = useNavigate()

    const setPageHomePage = () => {
        nav('/')
    }

    const setPageCreateTrip = () => {
        nav('/CreateTrip')
    }

    const Logout = () => {
        localStorage.removeItem('token')
        nav('/LoginPage')
    }

    const getTrips = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-aguiar/trips'
        axios.get(url)
            .then((res) => {
                setTripList(res.data.trips)
                console.log(tripList)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTrips()
    }, [])

    const trips = tripList.map((trip) => {
        return (<CardTripAdimin
            nome={trip.name}
            data={trip.date}
            id={trip.id}
            getTrips={getTrips}
        />)
    })

    return (
        <Container>
            <Header>
                <Logo>
                    <h1 onClick={setPageHomePage}>LABEX</h1>
                </Logo>
                <Menu>
                    <button onClick={Logout} className="trips">Logout</button>
                </Menu>
            </Header>
            <Section>
                <Display>
                    <h1>Painel de controle</h1>
                    <MenuPainel>
                        <button onClick={setPageCreateTrip} className="trips">Criar Viagem</button>
                    </MenuPainel>
                    <List>
                        {trips}
                    </List>
                </Display>
            </Section>
        </Container>
    )
}