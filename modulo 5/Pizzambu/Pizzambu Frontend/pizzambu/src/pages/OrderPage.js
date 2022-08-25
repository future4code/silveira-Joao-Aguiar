import { useNavigate } from "react-router-dom"
import { goToMainPage } from "../router/cordinator"
import React from "react";
import "./styles/Header.css"
import { Add, Container, Form, Info, OrderDisplay, OrderSection } from "./styles/OrderPageStyle";

export const OrderPage = (props) => {
    const nav = useNavigate()

    return (
        <Container>
            <header className="head">
                <h1 className="logo">Pizzambu</h1>
                <button onClick={() => { goToMainPage(nav) }} className="headerButton"> Página Principal </button>
            </header>
            <OrderSection>
                <Form>
                    <Info>
                        <select>
                            <option>Selecione sua pizza</option>
                            <option>Marguerita</option>
                            <option>Calabresa</option>
                        </select>
                        <input placeholder="qtd" type={"number"} />
                    </Info>
                    <OrderDisplay/>
                    <Add>
                        <button> Adicionar Pedido</button>
                        <button> Enviar pedido</button>
                    </Add>
                </Form>
            </OrderSection>
            <h1>OrderPage</h1>
            <button onClick={() => goToMainPage(nav)}>go to MainPage</button>
        </Container>
    )
}