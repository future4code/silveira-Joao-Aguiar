import axios from "axios";
import { BASE_URL } from "../constants/urls";




export function handleLikes(id, userVote, vote, location) {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    const BODY = {
        direction: vote
    }

    if (userVote == null) {
        axios.post(`${BASE_URL}/${location}/${id}/votes`, BODY, headers)
            .then((res) => {
                console.log(res)
                console.log('vote criado')
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        if (userVote == vote) {
            axios.delete(`${BASE_URL}/${location}/${id}/votes`, headers)
                .then((res) => {
                    console.log(res)
                    console.log('vote deletado')
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios.put(`${BASE_URL}/${location}/${id}/votes`, BODY, headers)
                .then((res) => {
                    console.log(res)
                    console.log('vote mudado')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
