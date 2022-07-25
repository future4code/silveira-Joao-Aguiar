"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3003;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
app.get('/ping', (req, res) => {
    res.send('pong 🏓');
});
let tarefas = [
    {
        userId: 1,
        id: 1,
        title: 'lavar louça',
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: 'varrer a casa',
        completed: true
    }
];
app.get('/concluidos', (req, res) => {
    res.send(tarefas.filter(tarefa => {
        return tarefa.completed === true;
    }));
});
app.get('/a-fazer', (req, res) => {
    res.send(tarefas.filter(tarefa => {
        return tarefa.completed === false;
    }));
});
app.post('/add-tarefa', (req, res) => {
    const nomeNovaTarefa = req.body.title;
    const novaTarefa = {
        userId: 1,
        id: Date.now(),
        title: nomeNovaTarefa,
        completed: false
    };
    tarefas.push(novaTarefa);
    res.send(tarefas);
});
app.put('/feito/:id', (req, res) => {
    const idTarefa = req.params.id;
    const status = req.body.completed;
    tarefas.map(tarefa => {
        if (idTarefa === String(tarefa.id)) {
            tarefa.completed = status;
        }
    });
    res.send(tarefas);
});
app.delete('/delete-tarefa/:id', (req, res) => {
    const idTarefa = req.params.id;
    const status = req.body.completed;
    tarefas.map((tarefa, i) => {
        if (idTarefa === String(tarefa.id)) {
            tarefas.splice(i, 1);
        }
    });
    res.send(tarefas);
});
