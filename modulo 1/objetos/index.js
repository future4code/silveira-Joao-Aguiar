// EXERCÍCIOS DE INTERPRETAÇÃO
//.............................................................................................................................................
/*
_______________________________________________________________________________________________________________________________________________

1)a.
    Matheus Nachtergaele
    Virginia Cavendish
    {canal: "Globo", horario: "14h"}
_______________________________________________________________________________________________________________________________________________

2)a. {nome: "Juca", idade: 3, raca: "SRD"}
     {canal: "Globo", horario: "14h", nome: "Juba"}
     {canal: "Globo", horario: "14h", nome: "Juba", nome: gato.nome.replaceAll("a", "o")}

  b. Esta sintaxe cologa o objeto citado após ela dentro do objeto atual.
_______________________________________________________________________________________________________________________________________________

3)a. false
     undefined

  b. A função retorna o equivalente à: 'pessoa["nome"]' , que é uma das formas de chamar a propriedade de um objeto.

_______________________________________________________________________________________________________________________________________________
*/
// EXERCÍCIOS DE ESCRITA
//.............................................................................................................................................

//1)

    let obj = {
        nome: "João",
        apelidos: ["Jal","Jão","Soneca"]
    }

    function escrever (nome , apelidos){
        return `Eu sou ${nome}, mas pode me chamar de: ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}`
    }

    console.log(escrever(obj.nome,obj.apelidos))

    let obj2 = {
        ...obj,
        apelidos: ["Batera","Marquim","Marco"]
    }

    console.log(escrever(obj2.nome,obj2.apelidos))

//.............................................................................................................................................

//2)

    obj1 = {
        nome:"João", 
        idade:"24", 
        profissao:"Estudante"
    }
    obj2 = {
        nome:"Ediane", 
        idade:"23", 
        profissao:"Vendedora"
    }

    const txt = (nome,idade,profissao) => {
        let valNome = nome.length
        let valProf = profissao.length
        let array = [nome,valNome,idade,profissao,valProf]
        return array   
    }

    console.log(txt(obj1.nome,obj1.idade,obj1.profissao))
    console.log(txt(obj2.nome,obj2.idade,obj2.profissao))
    
//.............................................................................................................................................

//3)
let laranja;
let manga;
let kiwi;
    var carrinho = []
    laranja = {
        nome:"laranja",
        disponibilidade: true
    }
    manga = {
        nome:"manga",
        disponibilidade: true
    }
    kiwi = {
        nome:"kiwi",
        disponibilidade: true
    }

    const insert = (obj1,obj2,obj3) => {
        let carrinho = [obj1,obj2,obj3]
        return carrinho
    }

    console.log(insert(laranja,manga,kiwi))


//.............................................................................................................................................