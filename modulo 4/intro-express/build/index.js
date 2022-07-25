"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on Port ${PORT}`);
});
app.get("/mensagem", (req, res) => {
    res.status(200).send('Meu primeiro endpoint');
});
let usersList = [
    {
        id: 1,
        name: 'João',
        email: 'joao@gmail.com',
        Phone: '(22)99933-4455',
        website: 'www.joaoDev.com.br',
    },
    {
        id: 2,
        name: 'Ediane',
        email: 'Edi@gmail.com',
        Phone: '(22)99977-6622',
        website: 'www.EdiDev.com.br',
    },
    {
        id: 3,
        name: 'Pedro',
        email: 'Pedro@gmail.com',
        Phone: '(22)99844-9900',
        website: 'www.PedroDev.com.br',
    }
];
app.get("/users", (req, res) => {
    res.send(usersList);
});
