import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 10px;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px -10px 15px rgba(0,0,0,0.7);

a{
color:black;
cursor: pointer;
}

i{
font-size:40px;
}
`

const Autor = styled.div`

`

const Redes = styled.div`
display:flex;
gap: 40px;
`


export default function Footer(props){

    return(
        <Container>
            <Redes>
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-square"></i></a>
            <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
            </Redes>
            <Autor>
                <a href=""><p>site criado por João Marcos Alves de Aguiar</p></a>
            </Autor>
        </Container>
    )
}