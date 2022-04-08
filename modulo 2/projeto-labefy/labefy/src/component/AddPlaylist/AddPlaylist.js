import React from "react";
import styled from 'styled-components';

const Criar = styled.div`
display:flex;
flex-direction: column;
`

const Container = styled.div`
background-color: white;
border-top:solid 1px;
border-left:solid 1px;
border-right:solid 1px;

input{
    border:none;
    border-bottom: solid 1px;
    height: 30px;

    :focus{
        outline:0px;
    }
}

button{
    background-color: black;
    color: white;
    cursor:pointer;
    border:none;
    height: 30px;
}
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
            </Container>
        )
    }

}



export default AddPlaylist;