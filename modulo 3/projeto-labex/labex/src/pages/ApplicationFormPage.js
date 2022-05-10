import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer/Footer"


const Container = styled.div`

`

const Forms = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
margin-bottom: 20px;

input{
    height: 30px;
    margin: 10px;
}

select{
    height: 35px;
    margin-left: 10px;
    margin-right: 10px;
}

textarea{
    height: 85px;
    margin-left: 10px;
    margin-right: 10px;
}
`

const Section = styled.section`
display: flex;
justify-content: center;
`

const Display = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    flex-direction: column;
    margin: 20px;
    width: 50%;
    
    border-radius: 10px;
    overflow: hidden;

    button{
        font-size: 17px;
        font-weight: bold;
        height: 35px;
        border: none;
        background-color: #8F85D8;
        cursor: pointer;
        color: White;
    }

    h1{
        text-align: center;
    }
`

const Menu = styled.div`
button{
    height: 35px;
    margin: 5px;
    font-size:18px;
    color: white;
    font-family: 'Oxygen', sans-serif;
    font-weight:bold;
    cursor: pointer;
}

.trips{
    border:none;
    border-radius: 10px;
    width:150px;
    height:30px;
    background-color: #313B64;
    color:White;
    font-size: 20px;
    cursor: pointer;
    margin-right: 70px;
}
`

const Header = styled.header`
position:relative;
display:flex;
justify-content: space-between;
align-items: center;
height: 100px;
background-color: #8F85D8;
box-shadow: 0px 10px 15px rgba(0,0,0,0.6);
`

const Logo = styled.div`
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-left: 20px;
color:white;
font-size: 23px;
font-family: 'Bord';
`


export default function CreateTrip(props){
    const [nome,setNome] = useState('')
    const [aplicacao,setAplicacao] = useState('')
    const [idade,setIdade] = useState('')
    const [profissao,setProfissao] = useState('')
    const [pais,setPais] = useState('')
    const [trips,setTrips] = useState([])
    const [idTripAtual,setIdTripAtual] = useState('')
    const nav = useNavigate()

    const onChangeNome = (e)=> {
        setNome(e.target.value)
    }

    const onChangeAplicacao = (e)=> {
        setAplicacao(e.target.value)
    }

    const onChangeIdade = (e)=> {
        setIdade(e.target.value)
    }

    const onChangeProfissao = (e)=> {
        setProfissao(e.target.value)
    }

    const onChangePais = (e)=> {
        setPais(e.target.value)
    }

    const onChangeId = (e)=> {
        setIdTripAtual(e.target.value)
        console.log(idTripAtual)
    }

    const setPageHomePage = ()=>{
        nav('/')
    }

    const setPageTrips = ()=>{
        nav('/Trips')
    }

    const sendApp = ()=> {

        const body = {
        name: nome,
        age: idade,
        applicationText: aplicacao,
        profession: profissao,
        country: pais
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-aguiar/trips/${idTripAtual}/apply`

        if((nome && idade && aplicacao && profissao && pais && idTripAtual) !== ''){
            axios.post(url,body)
        .then((res)=>{
            alert('Aplicação enviada com sucesso')
            setNome('')
            setIdade('')
            setAplicacao('')
            setProfissao('')
            setPais('')
        })
        .catch((err)=>{
            alert('ocorreu um erro')
        })
        }else{
            alert('está faltando alguma informação em seu formulário')
        }
    }

    const getTrips = ()=> {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-aguiar/trips'
        axios.get(url)
        .then((res)=>{
            setTrips(res.data.trips)
        })
        .catch((err)=>{

        })
    }

    useEffect(()=>{
        getTrips()
    },[])

    const tripListApp = trips.map((trip)=>{
        return (<option value={trip.id}>{trip.name} - {trip.planet}</option>)
    })

    return(
        <Container>
            <Header>
                <Logo>
                    <h1 onClick={setPageHomePage}>LABEX</h1>
                </Logo>
                <Menu>
                    <button onClick={setPageTrips} className="trips">Voltar</button>
                </Menu>
            </Header>         
                <Section>
                    <Display>
                        <h1>Inscrever-se Para uma Viagem</h1>
                        <Forms>
                            <select onChange={onChangeId}>
                                <option value=''>Selecione uma Viagem</option>
                                {tripListApp}
                            </select>
                        <input onChange={onChangeNome} placeholder="Nome" value={nome}/>
                        <textarea onChange={onChangeAplicacao} placeholder="Texto de Aplicação" value={aplicacao}/>
                        <input type={'number'} onChange={onChangeIdade} placeholder="Idade" value={idade}/>
                        <input onChange={onChangeProfissao} placeholder="Profissão" value={profissao}/>
                        <input onChange={onChangePais} placeholder="País" value={pais}/>
                        </Forms>
                        <button onClick={sendApp}>Enviar</button>
                    </Display>
                </Section>
                <Footer/>
        </Container>
    )
}