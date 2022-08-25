import { useNavigate } from "react-router-dom"
import { goToOrderPage } from "../router/cordinator"
import { Footer } from "./styles/Footer"
import { CheffImage, Container, OutDoor, PizzaMenu, SectionMainPage, Show, Text, Transition } from "./styles/MainPageStyle"
import "./styles/Header.css"
import React from "react"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/BaseUrl"
import { useEffect } from "react"
import { PizzaDisplay } from "../components/PizzaDisplay"


export const MainPage = (props)=>{
    const [menu,setMenu] = useState()
    const nav = useNavigate()


    const getMenu = ()=>{
        axios.get(`${BASE_URL}/pizza/menu`)
        .then(res=>{
            setMenu(res.data.menu)
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getMenu()
    },[])

    useEffect(()=>{
        console.log(menu)
    },[menu])

    const menuList = menu && menu.map((pizza)=>{
        return <PizzaDisplay
            name={pizza.name}
            key={pizza.id}
            id={pizza.id}
            ingredients={JSON.parse(pizza.ingredients)}
        />
    })

    return(
        <Container>
            <OutDoor/>
            <header className="head">
                <h1 className="logo">Pizzambu</h1>
                <button onClick={()=>{goToOrderPage(nav)}} className="headerButton"> Peça já sua pizza! </button>
            </header>
            <Transition className="transition"/>
            <SectionMainPage>
                <Text>
                    <Show>
                        <p> Texto aqui Texto aqui Texto aquiTexto aquiv Texto aquivv Texto aqui Texto aquiTexto aquiTexto aquiTexto aqui</p>
                    </Show>
                    <CheffImage>
                        <img src="https://img.freepik.com/fotos-premium/pizzaiolo-bonito-fazendo-pizza-na-cozinha-na-pizzaria-etnia-afro-americana_1157-48109.jpg?w=2000"/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy88rq1rNF7KQOSO9mI6snBU1VtBFY3YaKzg&usqp=CAU"/>                            
                    </CheffImage>
                </Text>
                <hr/>
                <h1 className="title">Veja algumas de nossas Pizzas</h1>
                <PizzaMenu>
                    {menuList}
                </PizzaMenu>
            </SectionMainPage>
            <Footer>
            </Footer>
        </Container>
    )
}