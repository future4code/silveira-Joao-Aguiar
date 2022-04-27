import styled from "styled-components"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


const Container = styled.div`

`


export default function TripsDetail(props){

    return(
        <Container>
            <Header/>               
                <h1>ListTrips</h1>              
            <Footer/>
        </Container>
    )
}