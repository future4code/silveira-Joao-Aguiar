
import React,{useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import PokeCard from '../PokeCard/PokeCard'



const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

select{
    width: 200px;
    height: 30px;
}
`

const Card = styled.div`
margin-top: 100px;
`
export default function Pokemon(props){
const [pokeList,setPokeList] = useState([])
const [pokeName,setPokeName] = useState('')
    
    useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
          setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });

    },[])



    let list = pokeList.map((pokemon)=>{
        return (
            <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
            </option>
        )
    })

    let onChangePokemon = (e)=> {
        setPokeName(e.target.value)
        console.log(pokeName)
    }

    return(
        <Container>
            <h1>Selecione Um Pokemón</h1>
            <select onChange={onChangePokemon}>
                <option value={''}>Nenhum</option>
                {list}
            </select>
            <Card>
                {pokeName && <PokeCard pokeName={pokeName}/>}
            </Card>
        </Container>
    )
}