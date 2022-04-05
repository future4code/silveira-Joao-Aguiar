import React from 'react';
import axios from 'axios';


class MainPage extends React.Component{

    render(){
        return(
            <div>
            <input placeholder='Usuário' type='text' onChange={this.props.onChangeInputUser} value={this.props.valorUser}/>
            <input placeholder='Email' typr='email'  onChange={this.props.onChangeInputEmail} value={this.props.valorEmail}/>
            <button onClick={this.props.criarUsuarios}>Criar usuário</button>
            </div>
        )
    }
}

export default MainPage;