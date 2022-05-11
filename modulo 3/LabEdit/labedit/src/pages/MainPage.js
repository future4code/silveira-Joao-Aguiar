import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Navigation } from "../routes/cordinator"
import { corNeutra, corPrimaria, corSecundaria } from '../constants/colors'
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { useEffect, useState } from "react"
import { Post } from "../components/post/post"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Posts = styled.div`
display: flex;
gap: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin-top:20px;
margin-bottom:20px;
`


const Header = styled.header`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
background-color: ${corPrimaria};
`

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;

hr{
    width: 100%;
}

form{
    width: 90%;
    display: flex;
    flex-direction: column;

    textarea{
        border-radius: 10px;
        margin-bottom: 10px;
        height: 150px;
    }

    button{
        border: none;
        border-radius: 20px;
        margin-bottom: 10px;
        height: 35px;
        background-color: ${corNeutra};
        color: white;
    }

    input{
        border: solid 1px;
        border-radius: 5px;
        height: 25px;
        margin-bottom: 10px;
    }
}
`

export function MainPage() {

const [posts,setPosts] = useState()
const [text,setText] = useState('')
const [title,setTitle] = useState('')
const nav = useNavigate()
const params = useParams()

const getPosts = ()=> {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    
    axios.get(`${BASE_URL}/posts`,headers)
    .then((res)=>{
        console.log(res.data)
        setPosts(res.data)      
    })
    .catch((err)=>{
        console.log(err)
        console.log(headers)
        
    })
}

useEffect(()=>{
    getPosts()
},[])

const onChangeText = (e) => {
    setText(e.target.value)
}

const onChangeTitle = (e) => {
    setTitle(e.target.value)
}

const logOut = ()=>{
    localStorage.removeItem('token')
    Navigation(nav,'/')
}

const postar = (e)=>{
    e.preventDefault()

    const BODY = {
        title: title,
	    body: text
    }

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    axios.post(`${BASE_URL}/posts`,BODY,headers)
    .then((res)=>{
        alert(res.data)
        setText('')
        setTitle('')
        getPosts()
    })
    .catch((err)=>{
        console.log(err)
    })
}
    return (
        <Container>
            <Header>
            <p>Logo</p>
            <button onClick={logOut}>logout</button>
            </Header>
            <Section>
                <form onSubmit={postar}>
                    <input onChange={onChangeTitle} value={title} required type='text' placeholder="Titulo"/>
                    <textarea required onChange={onChangeText} value={text} placeholder="escreva seu post..."/>
                    <button>Postar</button>
                </form>
                <hr/>
                <Posts>
                    {posts && posts.map((post)=>{
                       return(
                           <Post 
                            key={post.id}
                            id={post.id}
                            titulo={post.title}
                            body={post.body}
                            userName={post.username}
                            voteSum={post.voteSum}
                            commentCount={post.commentCount}
                            userVote={post.userVote}
                           />
                       ) 
                    })}
                </Posts>
            </Section>  
        </Container>
    )
}