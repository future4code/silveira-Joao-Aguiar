let tarefas = ["ir no mercado"]

tarefas.push(process.argv[2])

console.log('Tarefa adicionada com sucesso')
console.log(` lista de tarefas: ${tarefas}`)