import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { CommentCard } from "../components/coment/coment"
import { corNeutra, corPrimaria } from "../constants/colors"
import { BASE_URL } from "../constants/urls"
import { handleLikes } from "../functions/setLikes"
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

.loading{
    font-size: 50px;
}
`

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: ${corPrimaria};
box-shadow: 0px 0px 10px;

h1{
    margin-left: 30px;
}

button{
    border: none;
    border-radius: 10px;
    width: 160px;
    height: 35px;
    margin-right: 30px;
    background-color: ${corNeutra};
    color: white;
    font-size: 20px;
}
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
margin: 6px;

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
        setDislike(false)
        handleLikes(params.id, params.userVote, 1, "posts", getComments)
    }

    const clickDislike = () => {
        setDislike(!dislike)
        setLike(false)
        handleLikes(params.id, params.userVote, -1, "posts", getComments)
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
                setComments(res.data)
            })
            .catch((err) => {
                console.log(err)
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

        axios.post(`${BASE_URL}/posts/${params.id}/comments`, BODY, headers)
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
        if (params.userVote == 1) {
            setLike(true)
        } else if (params.userVote == -1) {
            setDislike(true)
        }
    }, [])

    return (

        <Container>
            <Header>
                <h1>Labedit</h1>
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
                    <Dislike>
                        {dislike ? <i onClick={clickDislike} class="fa-solid fa-circle-down" />
                            :
                            <i onClick={clickDislike} class="fa-regular fa-circle-down" />}
                    </Dislike>
                </Menu>
            </Post>
            <hr />
            <CommentArea onSubmit={onSubmitComment}>
                <textarea required value={text} onChange={onChangeText} placeholder="digite seu comentário" />
                <button>Postar Comentário</button>
            </CommentArea>
            <hr />
            <Comments>
                {
                    !comments ?
                        <div className="loading">
                            <i class="fa-solid fa-spinner fa-spin-pulse" />
                        </div>
                        :
                        comments.map((comment) => {
                            return <CommentCard
                                id={comment.id}
                                userVote={comment.userVote}
                                getComments={getComments}
                                key={comment.id}
                                voteSum={comment.voteSum}
                                body={comment.body}
                                userName={comment.username}
                            />
                        })}
            </Comments>

        </Container>

    )
}