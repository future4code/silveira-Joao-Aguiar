import React from "react";
import styled from 'styled-components';
import axios from 'axios';

const Criar = styled.div`

`

const Audio = styled.audio`
background-color: black;
border-radius: none;
`

const Container = styled.div`
display: flex;
flex-direction: column;
border:solid 1px;
background-color: white;

h2{
    margin: auto;
}
`

class InfoPlaylist extends React.Component {

    state = {
        valorUrl: '',
        valorArtista: '',
        valorNome: ''
    }

    addMusicas = () => {
        const body = {
            name: this.state.valorNome,
            artist: this.state.valorArtista,
            url: this.state.valorUrl
        }

        // http://spoti4.future4.com.br/1.mp3

        const headers = {
            headers: {
                Authorization: this.props.auth
            }
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        axios.post(url, body, headers)
            .then((res) => {
                this.props.infoPlaylist(this.props.id, this.props.nome)
                this.props.addState()
                this.setState({
                    valorUrl: '',
                    valorArtista: '',
                    valorNome: ''
                })
            }).catch((err) => {
                this.props.addState()
                console.log(err)
            })
    }

    //................................................................

    onChangeNome = (e) => {
        this.setState({ valorNome: e.target.value })
    }

    onChangeArtista = (e) => {
        this.setState({ valorArtista: e.target.value })
    }

    onChangeUrl = (e) => {
        this.setState({ valorUrl: e.target.value })
    }


    render() {

        const musicas = this.props.musicas.map((musica) => {
            return (
                <div>
                    <h2>{musica.name} | {musica.artist}</h2>
                    <Audio controls src={musica.url} />
                </div>
            )
        })
        let musicList;
        if (this.props.add) {
            musicList = (
                <div>
                    <input
                        onChange={this.onChangeNome}
                        value={this.state.valorNome}
                        placeholder='Nome da música'
                    />
                    <input
                        onChange={this.onChangeArtista}
                        value={this.state.valorArtista}
                        placeholder='Artista'
                    />
                    <input
                        onChange={this.onChangeUrl}
                        value={this.state.valorUrl}
                        placeholder='Url'
                    />
                    <button onClick={this.addMusicas}>
                        Salvar
                    </button>
                </div>
            )
        }
        else {
            musicList = (
                <div>
                    <button onClick={this.props.addState}>
                        Adicionar Musica
                    </button>
                </div>
            )
        }

        return (
            <Container>
                <h2>{this.props.nomePlaylistAtual}</h2>
                <div>
                    {musicas}
                </div>
                {musicList}
                <button onClick={this.props.playlistPage}>
                    voltar
                </button>
            </Container>
        )
    }

}



export default InfoPlaylist;