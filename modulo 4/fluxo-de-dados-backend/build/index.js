"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const PORT = 3003;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
app.get('/teste', (req, res) => {
    res.send('Está funcionando');
});
app.post('/add-produto', (req, res) => {
    try {
        const nomeNovoProduto = req.body.name;
        const precoNovoProduto = req.body.price;
        if (!nomeNovoProduto || !precoNovoProduto) {
            throw new Error("err1");
        }
        if (typeof nomeNovoProduto != "string") {
            throw new Error("err2");
        }
        if (isNaN(precoNovoProduto)) {
            throw new Error("err3");
        }
        if (precoNovoProduto <= 0) {
            throw new Error("err4");
        }
        const novoProduto = {
            id: String(Date.now()),
            name: nomeNovoProduto,
            price: precoNovoProduto
        };
        data_1.listaProdutos.push(novoProduto);
        res.status(200).send(data_1.listaProdutos);
    }
    catch (err) {
        res.status(400).end(err);
        console.log(err.message);
    }
});
app.get('/produtos', (req, res) => {
    res.send(data_1.listaProdutos);
});
app.put('/mudar-preco/:id', (req, res) => {
    try {
        const novoPreco = req.body.newPrice;
        if (!novoPreco) {
            throw new Error();
        }
        if (isNaN(novoPreco)) {
            throw new Error();
        }
        if (novoPreco <= 0) {
            throw new Error();
        }
        const idProduto = req.params.id;
        const produtoAtual = data_1.listaProdutos.filter(item => {
            return item.id === idProduto;
        });
        if (produtoAtual[0] === undefined) {
            throw new Error();
        }
        produtoAtual[0].price = novoPreco;
        res.status(200).send(produtoAtual);
    }
    catch (err) {
        res.status(400).end();
    }
});
app.delete('/delete-produto/:id', (req, res) => {
    const idProduto = req.params.id;
    data_1.listaProdutos.forEach((item, i) => {
        if (item.id === idProduto) {
            data_1.listaProdutos.splice(i, 1);
        }
    });
    res.send(data_1.listaProdutos);
});
//# sourceMappingURL=index.js.map