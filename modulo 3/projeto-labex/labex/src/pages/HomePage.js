import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import styled from "styled-components"

const Container = styled.div`

`

const Img = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 450px;
width: 100%;
background-image: url(https://bit.ly/2ZZJtBK);
background-repeat: no-repeat;
background-size:cover;

h1{
    font-family: 'Oxygen', sans-serif;
    color:white;
    font-size: 50px
}
`

export default function HomePage(props){

    return(
        <Container>
            <Header/>
                <Img>
                    <h1>Explore a galáxia</h1>
                </Img>
            <Footer/>
        </Container>
    )
}