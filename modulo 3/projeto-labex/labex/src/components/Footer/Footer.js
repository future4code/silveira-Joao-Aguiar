import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px -10px 15px rgba(0,0,0,0.7);
`


export default function Footer(props){

    return(
        <Container>
            <h1>Intagram</h1>
            <h1>Facebook</h1>
            <h1>Twitter</h1>
        </Container>
    )
}