import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls"
import { Navigation } from "../../routes/cordinator"

const Container = styled.div`
justify-self: center;
border: solid 1px;
border-radius: 10px;
width: 90%;
text-align: center;
overflow: hidden;

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

export function Post(props) {

    const nav = useNavigate()
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)

    const clickLike = () => {
        setLike(!like)
    }

    const clickDislike = () => {
        setDislike(!dislike)
    }

    const setPageComents = ()=>{
        Navigation(nav,`/commentPage/${props.id}`)
    }


    return (
        <Container>
            <Title>
                <p>{`Enviado por: ${props.userName}`}</p>
            </Title>
            <hr />
            <Body>
                <h5>{props.body}</h5>
            </Body>
            <hr />
            <Menu>
                <Like>
                    {like ? <i onClick={clickLike} class="fa-solid fa-circle-up" />
                        :
                        <i  onClick={clickLike} class="fa-regular fa-circle-up" />}
                </Like>
                <p> {(props.voteSum == null)? 0 : props.voteSum} </p>
                <Dislike>
                    {dislike ? <i onClick={clickDislike} class="fa-solid fa-circle-down" />
                        :
                        <i onClick={clickDislike} class="fa-regular fa-circle-down" />}
                </Dislike>
                <div>
                    <i onClick={setPageComents} class="fa-regular fa-message" />
                    <p> {(props.commentCount == null)? 0 : props.commentCount} </p>
                </div>
            </Menu>

        </Container >
    )
}