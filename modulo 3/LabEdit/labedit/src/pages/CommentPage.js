import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { CommentCard } from "../components/coment/coment"
import { corNeutra, corPrimaria } from "../constants/colors"
import { BASE_URL } from "../constants/urls"
import { Navigation } from "../routes/cordinator"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

hr{
    width: 100%;
}
`

const CommentArea = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 10px;

textarea{
width: 90%;
height: 150px;
margin-bottom: 10px;
border: solid 1px;
}

button{
border: none;
border-radius: 5px;
margin-bottom: 10px;
height: 35px;
width: 92%;
background-color: ${corNeutra};
color: white;
font-size: 18px;
}
`

const Comments = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`

const Header = styled.header`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
background-color: ${corPrimaria};
`

const Post = styled.div`
justify-self: center;
width: 100%;
text-align: center;
overflow: hidden;
margin-top: 20px;

hr{
    margin: 0;
}
`

const Title = styled.div`

`


const Like = styled.div`
color: green;
`

const Dislike = styled.div`
color: red;
`

const Body = styled.div`
height: 100px;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
gap: 10px;

i{
    font-size: 25px;
}


div{
    display: flex;
    align-items: center;
    gap: 5px;
}
`


export function CommentPage() {
    const params = useParams()
    const nav = useNavigate()
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)
    const [comments, setComments] = useState([])
    const [text, setText] = useState('')

    const clickLike = () => {
        setLike(!like)
    }

    const clickDislike = () => {
        setDislike(!dislike)
    }

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const onSubmitComment = (e) => {
        e.preventDefault()
        createComment()
        setText('')

    }

    const setPageMainPage = () => {
        Navigation(nav, '/mainPage')
    }

    const getComments = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.get(`${BASE_URL}/posts/${params.id}/comments`, headers)
            .then((res) => {
                console.log(res.data)
                setComments(res.data)
            })
            .catch((err) => {
                console.log(err)
                console.log(params.id)
            })

    }

    const createComment = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        const BODY = {
            body: text
        }

        axios.post(`${BASE_URL}/posts/${params.id}/comments`,BODY, headers)
            .then((res) => {
                alert(res.data)
                getComments()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getComments()
    }, [])

    return (

        <Container>
            <Header>
                <p>Logo</p>
                <button onClick={setPageMainPage}>Voltar</button>
            </Header>
            <Post>
                <Title>
                    <h2>{params.title}</h2>
                    <p>{`Enviado por: ${params.user}`}</p>
                </Title>
                <hr />
                <Body>
                    <h5>{params.body}</h5>
                </Body>
                <hr />
                <Menu>
                    <Like>
                        {like ? <i onClick={clickLike} class="fa-solid fa-circle-up" />
                            :
                            <i onClick={clickLike} class="fa-regular fa-circle-up" />}
                    </Like>
                    <p> {(params.voteSum == null) ? 0 : params.voteSum} </p>
                    <Dislike>
                        {dislike ? <i onClick={clickDislike} class="fa-solid fa-circle-down" />
                            :
                            <i onClick={clickDislike} class="fa-regular fa-circle-down" />}
                    </Dislike>
                    <div>
                        <i class="fa-regular fa-message" />
                        <p> {(params.comments == null) ? 0 : params.comments} </p>
                    </div>
                </Menu>
            </Post>
            <hr />
            <CommentArea onSubmit={onSubmitComment}>
                <textarea required value={text} onChange={onChangeText} placeholder="digite seu comentário" />
                <button>Postar Comentário</button>
            </CommentArea>
            <hr />
            <Comments>
                {comments && comments.map((comment) => {
                    return <CommentCard
                        voteSum={comment.voteSum}
                        body={comment.body}
                        userName={comment.username}
                    />
                })}
            </Comments>

        </Container>

    )
}