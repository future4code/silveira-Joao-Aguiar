# Exercicio 1

a) O que são os round e salt? Que valores são recomendados para o round?
 Que valor você usou? Por quê?

 R: round é o "custo" de processamento que será usado para gerar a encriptação do texto plano, 
 salt é uma serie aleatória de letras que é assimilada junto ao texo ou palavra encriptada.
 É recomendado o valor 12. 
 Usei o valor recomendado pois nao exige demais do processamento da maquina
 e gera uma boa encriptação.

b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

R:feito

c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

R:feito

# Exercicio 2

a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

R: o cadastro, pois a senha deve ir para o banco de dados ja encriptada.

b) *Faça a alteração do primeiro endpoint*

c) *Faça a alteração do segundo endpoint*

d) *No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*