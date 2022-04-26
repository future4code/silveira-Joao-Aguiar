import styled from "styled-components"

const Container = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px 10px 15px rgba(0,0,0);
`

const Menu = styled.div`

`


export default function Header(props){



    return(
        <Container>
            <h1>LabeX</h1>
            <Menu>
                <button>Admin</button>
                <button>Ver Viagens</button>
            </Menu>
        </Container>
    )
}