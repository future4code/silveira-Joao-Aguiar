import styled from "styled-components"
import Footer from "../components/Footer/Footer"
import { useNavigate } from "react-router-dom"

const Container = styled.div`

`

const Login = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 450px;
`

const Display = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
background-color:white;
width: 50%;
border-radius: 10px;
height:300px;
margin: 20px;


h1{
    text-align:center;
}
div{
    display: flex;
    flex-direction:column;
    margin:auto;
    width:70%;
    input{
        border:none;
        border-bottom: solid 1px;
        height:25px;
        margin:20px;
    }
}
button{
    border:none;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    background-color: #8F85D8;
    height: 40px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color:white;
}
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
display:flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px 10px 15px rgba(0,0,0);
`


export default function LoginPage(props) {

    const nav = useNavigate()


    const setPageHomePage = () => {
        nav('/')
    }

    const setPageTrips = () => {
        nav('/Trips')
    }

    return (
        <Container>
            <Header>
                <Logo onClick={setPageHomePage}>
                    <h1>LABEX</h1>
                </Logo>
                <Menu>
                    <button onClick={setPageTrips} className='trips'>Ver Viagens</button>
                </Menu>
            </Header>
            <Login>
                <Display>
                    <h1>Login</h1>
                    <div>
                        <input placeholder="E-mail" />
                        <input placeholder="Senha" />
                    </div>
                    <button>Entrar</button>
                </Display>
            </Login>
            <Footer />
        </Container>
    )
}