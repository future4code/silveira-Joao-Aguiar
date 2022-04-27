import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer/Footer"


const Container = styled.div`

`

const Section = styled.section`

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

const Header = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px 10px 15px rgba(0,0,0);
`


export default function AppForm(props){
    const nav = useNavigate()

    const setPageHomePage = ()=> {
        nav('/')
    }

    return(
        <Container>
            <Header>
                <Logo onClick={setPageHomePage}>
                <h1>LABEX</h1>
                </Logo>
                <Menu>
                    
                </Menu>
            </Header>
            <Section>
             <h1>Application Form</h1>
            </Section>
            <Footer />
        </Container>
    )
}