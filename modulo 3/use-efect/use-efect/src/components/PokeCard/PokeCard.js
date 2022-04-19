import React,{useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
display:flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
width: 200px;
box-shadow: 0px 7px 7px 5px rgba(0, 0, 0, 0.616);;
background-color: blue;

img{
    background-color:white;
    border:solid 1px;
    width:180px;
    margin 7px;
    border-radius: 10px;
}

`

const Info = styled.div`
display:flex;
flex-direction: column;
text-align:center;
margin-bottom: 5px;
color:white;
h2{
    margin-top: 5px;
}

p{
    margin:0;
    margin-bottom:5px;
}

`


export default function PokeCard (props){
const [pokemon,setPokemon] = useState({})
    
    useEffect(()=>{
    pegaPokemon(props.pokeName)
    },[])

    useEffect(()=>{    
            pegaPokemon(props.pokeName)
            console.log(pokemon)     
    },[props.pokeName])



  let pegaPokemon = pokeName => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(res => {
            setPokemon(res.data)        
          })
          .catch(err => {
            console.log(err);
          });
      };

    return(
        <Card>
            {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
            <Info>
            <h2>{pokemon.name}</h2>
            <p>Peso: {pokemon.weight} Kg</p>
            {pokemon.types && <p> Tipo: {pokemon.types[0].type.name}</p>}
            </Info>
        </Card>
    )
}