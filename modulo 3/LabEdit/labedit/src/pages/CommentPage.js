import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Navigation } from "../routes/cordinator"

const Container = styled.div`

`


export function CommentPage() {
const params = useParams()
const nav = useNavigate()
    
const setPageMainPage = ()=>{
    Navigation(nav,'/mainPage')
}
        return (
            <Container>
                <h1>Coment Page</h1>
                {params.id}
                <button onClick={setPageMainPage}>voltar</button>
            </Container>
        )
    }