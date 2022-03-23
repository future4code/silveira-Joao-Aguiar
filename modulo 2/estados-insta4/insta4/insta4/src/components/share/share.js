import React, {Component} from 'react'
import styled from 'styled-components'
import face from '../../img/facebook.png'
import insta from '../../img/instagram.png'
import twitter from '../../img/twitter.png'

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;

    p{
        margin: auto;
        padding: 10px;
        font-size: 15px;
    }

`

const Compartilhar = styled.button`
    width: 93%;
    margin: auto;
`

const InputComentario = styled.textarea`
    width: 90%;
    margin: auto;
`
const Imagem = styled.img`  
    width: 50px;
    margin: 10px;
`
const ContainerImg = styled.div`
    display: flex;
    justify-content: space-around;

`

export class Share extends Component {
	state = {
		comentario: ''
	}

    onChangeComentario = (event) => {
        this.setState({
            comentario: event.target.value
        })
    }

    aoCompartilharComentario = () => {
        if(this.state.comentario === ''){
            console.log (`Post compartilhado sem nenhum comentário`)
        }else{
            console.log (`Post compartilhado com o seguinte comentário: '${this.state.comentario}'`)
        }
        
      }


	render() {
		return <CommentContainer>
            <p>Comente e Selecione a rede social</p>
            <ContainerImg>
                <Imagem onClick={this.aoCompartilharComentario} src = {face} />
                <Imagem onClick={this.aoCompartilharComentario} src = {insta} />
                <Imagem onClick={this.aoCompartilharComentario} src = {twitter} />
            </ContainerImg>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
		</CommentContainer>
	}
}