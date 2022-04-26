import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MatchCard from "../MatchCard/MatchCard"

const Main = styled.div`

`
const Card = styled.div`
display:flex;
justify-content:center;
align-items:center;
border: solid 1px;
border-radius: 10px;
overflow: hidden;
`


export function MainPage() {
    const [perfilAtual, setPerfilAtual] = useState({})
    const [paglAtual, setPagAtual] = useState('cards')

    let getProfiles = () => {

        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-aguiar/person'

        axios.get(url, headers)
            .then((res) => {
                setPerfilAtual(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const clearMatches = ()=> {

        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-aguiar/clear'

        axios.put(url, headers)
            .then((res) => {
                console.log(res.data.message)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProfiles()
    }, [])

    const mudarTelaMatch = () => {
        setPagAtual('matches')
    }

    const mudarTelaCards = () => {
        setPagAtual('cards')
    }

    switch (paglAtual) {
        case 'cards':
            return (
                <Main>
                    <Card>
                        <MatchCard
                            foto={perfilAtual.photo}
                            nome={perfilAtual.name}
                            idade={perfilAtual.age}
                            bio={perfilAtual.bio}
                            id={perfilAtual.id}
                            getProfiles={getProfiles}
                        />
                    </Card>
                    <button onClick={mudarTelaMatch}>Ver Match</button>
                </Main>

            )

        case 'matches':
            return (
                <Card>
                    <h1>matches</h1>
                    <button onClick={mudarTelaCards}>Voltar</button>
                    <button onClick={clearMatches}>Reset Matches</button>
                </Card>
            )

        default: return <h1>error</h1>

    }

}