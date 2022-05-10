import styled from "styled-components"


const Container = styled.div`
display: flex;
justify-content:center;
margin:25px;
`
const Card = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
border-radius: 10px;
width: 80%;
box-shadow: 5px 5px 10px rgba(0,0,0,0.6);
background-color: white;

.title{
    display: flex;
    justify-content:center;
    grid-column-start:1;
    grid-column-end:4;
}
.description{
    height:70px;
    display: flex;
    justify-content:center;
    grid-column-start:1;
    grid-column-end:4;
}
.duration{
    display: flex;
    justify-content:center;
    grid-column-start:1;
    grid-column-end:2;
}
.data{
    display: flex;
    justify-content:center;
    grid-column-start:2;
    grid-column-end:3;
}
.planet{
    display: flex;
    justify-content:center;
    grid-column-start:3;
    grid-column-end:4;
}
`

export default function CardTrip(props) {
    return(
        <Container>
            <Card>
                <h1 className="title">{props.name}</h1>
                <p className="description">{props.description}</p>
                <h3 className="duration">Duração: {props.duration} dias</h3>
                <h3 className="data">Data: {props.data}</h3>
                <h3 className="planet">Planeta: {props.planet}</h3>
            </Card>
        </Container>
    )
}