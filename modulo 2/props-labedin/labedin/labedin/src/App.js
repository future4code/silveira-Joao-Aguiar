import React from 'react';
import './App.css';
import perfil from './foto.jpg';
import email from './o-email.png';
import endereco from './endereco-residencial.png';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {perfil}
          nome="João Marcos Alves de Aguiar" 
          descricao="Oi, eu sou o João. Sou aluno da Labenu. Sou apaixonado pelo ramo da tecnologia e um dia irei trabalhar como um desenvolvidor full-stack e viver disso"
        />

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem={email}
          info="jmaraguiar22@gmail.com"
        />

        <CardPequeno
          imagem={endereco}
          info="Rua José de Oliveira Campos"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        /> 
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />   
      </div>
    </div>
  );
}

export default App;
