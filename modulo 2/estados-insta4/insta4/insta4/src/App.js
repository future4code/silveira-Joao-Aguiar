import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Formulario = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding:20px;
  border: solid 1px;
  margin: 10px;

  button{
    border: none;
    color: white;
    background-color:black;
    width: 177px;
     margin-top:5px;
  }
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'Ediane',
        fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/152'
      },
      {
        nomeUsuario:'João',
        fotoUsuario:'https://picsum.photos/50/51',
        fotoPost:'https://picsum.photos/200/151'
      }
    ],

    valorUsuario: "",
    valorPerfilImg: "",
    valorPostImg: ""
  }
// Funções:

onChangeNome = (event) => {
  this.setState({valorUsuario: event.target.value})
}

onChangePerfilImg = (event) => {
  this.setState({valorPerfilImg: event.target.value})
}

onChangePostImg = (event) => {
  this.setState({valorPostImg: event.target.value})
}

addNovoPost = () => {
  let novoPost ={
      nomeUsuario: this.state.valorUsuario,
      fotoUsuario: this.state.valorPerfilImg,
      fotoPost: this.state.valorPostImg
    }

 const postsAtualizado = [...this.state.posts,novoPost]
 this.setState({posts: postsAtualizado})
 this.setState({valorUsuario: ""})
 this.setState({valorPerfilImg: ""})
 this.setState({valorPostImg: ""})

}

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
              )
    })

    return (
      <MainContainer>
          <Formulario>
              <h3>Crie um novo post</h3>
              <input value={this.state.valorUsuario} 
                     placeholder='Usuário' 
                     type='text'
                     onChange={this.onChangeNome}
              />
              <input value={this.state.valorPerfilImg} 
                     placeholder='Foto do perfil' 
                     type='text'
                     onChange={this.onChangePerfilImg}
              />
              <input value={this.state.valorPostImg} 
                     placeholder='Foto do post' 
                     type='text'
                     onChange={this.onChangePostImg}
              />
              <button onClick={this.addNovoPost}>
                Postar
              </button>      
          </Formulario>
        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
