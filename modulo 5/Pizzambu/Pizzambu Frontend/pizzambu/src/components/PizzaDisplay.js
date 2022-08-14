import React from "react"
import styled from "styled-components"

const Display = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid;
border-radius: 10px;
width: 200px;
`
const Ingredients = styled.div`
display: flex;
gap: 10px;
flex-direction: row;
`

export const PizzaDisplay = (props)=>{
    console.log(props.id)
    console.log(props.ingredients)
    return(
        <Display>
            <h3>{props.name}</h3>
            <Ingredients>
                {props.ingredients && props.ingredients.map((ingredient)=>{
                    return <h5>{ingredient}</h5>
                })}
            </Ingredients>
        </Display>
    )
}