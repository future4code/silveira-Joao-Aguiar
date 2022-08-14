import styled from "styled-components";

export const Container = styled.div`
background-color: white;
color: black;

h1{
    color: white;
}
`

export const OrderSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: black;
height: 100vh;
`

export const Info = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: black;

select{
    font-size: 20px;
    height: 40px;
}

input{
    height: 34px;
    width: 50px;
}
`

export const Add = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;
width: 100%;
`

export const OrderDisplay = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;
height: 50px;
`

export const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;
border: 1px solid;
border-radius: 10px;
padding: 10px;

button{
    width: 100%;
}
`