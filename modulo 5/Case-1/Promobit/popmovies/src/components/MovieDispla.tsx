import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { goToDetailPage } from "../router/cordinator"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 10px;

div{
text-align: center;
height: 50px;
width: 100%;
background-color: #35373B;
color: white;
}

img{
width: 100%;
}

@media only screen and (min-width:500px){

    div{
        height: 110px;
        width: 200px;
        background-color: #385267;
        margin-bottom: 10px;
        }
        img{
        width: 200px;
        }


}
`

export function MovieDisplay(props: any) {
    const [config, setConfig]: any = useState()
    const nav = useNavigate()

    const getConfig = async () => {

        const Headers = {
            headers: {
                "Authorization": `Bearer ${props.token}`
            }
        }

        await axios.get(`https://api.themoviedb.org/3/configuration`, Headers)
            .then(res => {
                setConfig(res.data.images)
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getConfig()
    }, [])

    return (
        <Container className="container" onClick={() => goToDetailPage(nav, props.id)}>
            <img src={`${config && config.base_url}w500${props.posterPath}`} />
            <div>
                <h3>{props.title}</h3>
                <p>Nota: {props.rate}</p>
            </div>
        </Container>
    )
}