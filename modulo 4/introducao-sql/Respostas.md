//EXERCICIO 1//

a) VARCHAR(n) - String de no maximo "n" caracteres
    NOT NULL - Valor nao pode ser nulo
    DATE - Representa uma data
    PRIMARY KEY - Indica a variavel que será usada como identificador único daquele objeto na tabela

b) SHOW DATABASES - Mostrou os Databases que eu tenho
   SHOW TABLES - Mostrou as tabelas no meu atual Database

c) Descreveu a estrutura da tabela Actor

//EXERCCIO 2//

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "002", 
    "Glória Pires",
    1000000,
    "1958-03-22", 
    "female"
    );

b)

c)  Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 0,141 s

d)  Código de erro: 1064. Você tem um erro na sua sintaxe SQL; verifique o manual que corresponde à versão do seu servidor MySQL para a sintaxe correta para usar perto de 'NSERT INTO Actor (id, salário, data_nascimento, sexo) na linha 1 0,141 seg

e)  Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 0,125 seg

f)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);