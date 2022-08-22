import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import logoImg from "../assets/icons8-popcorn-48.png"
import { goToMainPage } from "../router/cordinator"


const Img = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

img{
    width: 500px;
}
`

const Footer = styled.footer`
background-color: #385267;
height: 50px;
`

const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Line = styled.div`

`

const Section = styled.section`
background-color: #35373B;
color: white;
text-align: center;
`

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #385267;
height: 50px;
`

const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
`

const Menu = styled.div`
height: 100%;
background-color: white;

button{
    border: none;
    font-size: 20px;
    height: 100%;
    width: 100px;
}
`

const Container = styled.div`

@media only screen and (max-width:500px){
.display{
    width: 100%;
}
}
`

export function MovieDetails(props: any){
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YxZjk1MTdhM2I3YmVmNjNlYjE1YWYxMjIyYzQ2ZCIsInN1YiI6IjYyZDcwN2IwY2FhNTA4MDA0YzQ3YTM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuLQlgWELJrenepPsUp46EbeCEybz2QpMtqlFSGRLN4"
    const { id } = useParams()
    const [info,setInfo]: any = useState()
    const nav = useNavigate()
    const [config,setConfig]: any = useState()

    const getConfig = async ()=>{

        const Headers = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        await axios.get(`https://api.themoviedb.org/3/configuration`,Headers)
        .then(res => {
            setConfig(res.data.images)
        }).catch(error => {
            console.log(error)
        })
    }

    const getMovieDetails = async ()=> {
        const Headers = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        await axios.get(`https://api.themoviedb.org/3/movie/${id}`,Headers)
        .then((res: any)=>{
            setInfo(res.data)
        }).catch((error: any)=>{
            console.log(error)
        })
    }

    const genres = info && info.genres.map((genre: any) => {
        return `* ${genre.name}`
    })

    useEffect(()=>{
        getConfig()
        getMovieDetails()
    },[])

    return(
        <Container>
            <Header>
                <Logo id="Logo">
                    <img src={logoImg}/>
                    <h1>PopMovies</h1>
                </Logo>
                <Menu>
                    <button  onClick={()=>goToMainPage(nav)}>Voltar</button>   
                </Menu>
            </Header>
            <Section>
                <Img>
                    <img className="display" src={`${config && config.base_url}w500${info && info.poster_path}`}/>
                </Img>
                <Line/>
                <Info>
                    <h3>{`"${info && info.tagline}"`}</h3>
                    <p>Sinopse: {info && info.overview}</p>
                    <h4>Nota: {info && info.vote_average}</h4>
                    <h4>Lançado em: {info && info.release_date}</h4>
                    <h4>Generos: {genres}</h4>
                    <h4>Site: <a href={`${info && info.homepage}`}>{info && info.homepage}</a></h4>
                </Info>
            </Section>
            <Footer>
                
            </Footer>
        </Container>
    )
}