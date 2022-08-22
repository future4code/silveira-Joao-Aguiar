import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { MovieDisplay } from "../components/MovieDispla"
import logoImg from "../assets/icons8-popcorn-48.png"

const Container = styled.div`
a{
    color: white;
    font-style: none;
    font-size: 40px;
}

.pag{
    margin-right: 100px;
    margin-left: 100px;
    font-size: 20px;
    font-weight: bold;
}
@media only screen and (min-width:500px){

Header{
    justify-content: space-between;
    div{
        margin-left: 20px;
    }
}

Section{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
}
}
`

const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
background-color: #385267;
height: 50px;
`

const Section = styled.section`
background-color: #35373B;
`

const Footer = styled.footer`
background-color: #385267;
`

const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
`

const Pag = styled.div`
background-color: #385267;
display: flex;
align-items: center;
justify-content: center;
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



export function MainPage(props: any) {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YxZjk1MTdhM2I3YmVmNjNlYjE1YWYxMjIyYzQ2ZCIsInN1YiI6IjYyZDcwN2IwY2FhNTA4MDA0YzQ3YTM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuLQlgWELJrenepPsUp46EbeCEybz2QpMtqlFSGRLN4"
    const [popFilms, setPopFilms] = useState([])
    const [page, setPage] = useState(1)
    const [filterCheck, setFilterCheck] = useState(false)
    const [filterWindow, setFilterWindow] = useState()

    const nextPage = () => {
        const currPage = page + 1
        setPage(currPage)
    }

    const oldPage = () => {
        let currPage = page - 1
        if (currPage < 1) {
            currPage = 1
            setPage(currPage)
        } else {
            setPage(currPage)
        }
    }

    const getPopFilms = async () => {
        const Headers = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        await axios.get(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`, Headers)
            .then(res => {
                setPopFilms(res.data.results)
            }).catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {
        getPopFilms()
    }, [page])

    const movieList = popFilms && popFilms.map((film: any) => {
        return (
            <MovieDisplay
                id={film.id}
                posterPath={film.poster_path}
                token={token}
                title={film.original_title}
                rate={film.vote_average}
            />
        )
    })

    return (
        <Container>
            <Header>
                <Logo id="Logo">
                    <img src={logoImg} />
                    <h1>PopMovies</h1>
                </Logo>
            </Header>
            <Section>
                {movieList}
            </Section>
            <Pag>
                    <div>
                    <a href="#Logo"><i onClick={oldPage} className="fa-solid fa-angle-left"/></a>
                    </div>
                    <div className="pag">
                        Pag: {page}
                    </div>
                    <div >
                        <a href="#Logo"><i onClick={nextPage} className="fa-solid fa-angle-right"></i></a>
                    </div>
                </Pag>
        </Container>
    )
}