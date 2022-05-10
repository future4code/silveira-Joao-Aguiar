import Footer from "../components/Footer/Footer"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Container = styled.div`

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

.admin{
    border:none;
    background-color: transparent;
    margin-right: 20px;
}
.trips{
    border:none;
    border-radius: 10px;
    width:150px;
    background-color: #313B64;
}
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

const Header = styled.header`
position:relative;
display:flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px 10px 15px rgba(0,0,0,0.6);
`

const Img = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 450px;
width: 100%;
background-image: url(https://acegif.com/wp-content/gif/outerspace-6.gif);
background-repeat: no-repeat;
background-size:cover;
background-position: center;

h1{
    font-family: 'Anurati';
    color:white;
    font-size: 50px
}
`

export default function HomePage(props) {

    const nav = useNavigate()

    const setPageAdmin = ()=> {
        if(localStorage.getItem('token')){
            nav('/AdminHome')
        }
        else{
            nav('/LoginPage')
        }
    }

    const setPageTrips = ()=> {
        nav('/Trips')
    }


    return (
        <Container>
            <Header>
                <Logo>
                <h1>LABEX</h1>
                </Logo>
                <Menu>
                    <button className="admin" onClick={setPageAdmin}>Admin</button>
                    <button className="trips" onClick={setPageTrips}>Ver Viagens</button>
                </Menu>
            </Header>
            <Img>
                <h1>EXPLORE A GALAXIA</h1>
            </Img>
            <Footer />
        </Container>
    )
}