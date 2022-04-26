import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



const Card = styled.div`
text-align:center;
p{
width:300px;
}
`

const ButtonLike = styled.button`
background-color: green;
cursor:pointer;
`

const ButtonDislike = styled.button`
background-color: red;
cursor:pointer;
`
const ImgDisplay = styled.div`
width: 300px;
height:300px;
overflow: hidden;

img{
    width: 300px;
    overflow:hidden;
}
`

const Menu = styled.div`
display:flex;
justify-content:center;

button{
    width: 100%;
    height:30px;
    border: none;
}
`


export default function MatchCard(props){
const [isMatch,setIsMatch] = useState('')


const Match = (value)=> {
    let body;
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-aguiar/choose-person'
    const headers = {
        headers: {
            "Content-Type": "application/json"
       
        }
    }
    if(value){
         body = {
            id: `${props.id}`,
            choice: true
        }
    }else{
        body = {
            id:`${props.id}`,
            choice: false
        }
    }
    axios.post(url,body,headers)
    .then((res)=>{
    setIsMatch(res.data.isMatch)
    console.log(isMatch)
    if(!res.data.isMatch){
    props.getProfiles()
    }
    })
    .catch((err)=>{
    console.log(err)
    })
}


const mostrarMatch = ()=> {
    if(isMatch){
        return (
            <Menu>
                <ButtonLike onClick={cardContinue}>Continue</ButtonLike>
            </Menu>
        )
    }else if(!isMatch){
        return (
            <Menu>
                <ButtonLike onClick={()=>{Match(true)}}>Like</ButtonLike>
                <ButtonDislike onClick={()=>{Match(false)}}>Dislike</ButtonDislike>
            </Menu>
        )
    }
}

const cardContinue = ()=> {
    setIsMatch(false)
    props.getProfiles()
}

    return(
        <Card>
            <ImgDisplay>
            <img src={props.foto} />
            </ImgDisplay>
            <h2>{props.nome}</h2>
            <p>{props.idade} anos</p>
            <p>{props.bio}</p>
            {mostrarMatch()}
        </Card>
    )
}