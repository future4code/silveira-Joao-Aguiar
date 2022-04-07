import React from "react";
import styled from 'styled-components';

const Criar = styled.div`

`

const Container = styled.div`

`

class AddPlaylist extends React.Component {

    render() {
        return (
            <Container>
                <Criar>
                    <input
                        type='text'
                        value={this.props.valorNomePlaylist}
                        placeholder='Nome da Playlist'
                        onChange={this.props.onChangeNomePlaylist}
                    />
                    <button onClick={this.props.criarPlaylist}>
                        Criar Playlist
                    </button>
                </Criar>
                <button onClick={this.mainPage}>
                    Voltar
                </button>
            </Container>
        )
    }
    
}
  


export default AddPlaylist;