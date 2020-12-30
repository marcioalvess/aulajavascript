
/*
var nome = "Márcio Alves";// usando variáveis
var idade = "42" // String ele vai concatenar
var idade2 = 10 // numero ele vai somar
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos ") // concatenando 
alert(idade + idade2);
*/

//TAMBÉM POSSO USAR O CONSOLE PRA VER OS MEUS RESULTADOS
//EXEMPLO:  
/* 
console.log(nome);
console.log(idade + idade2);//concatenando 
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase("Japão", "Brasil")); // tudo maiusculo
console.log(frase.toLowerCase("Japão", "Brasil")); //tudo minusculo
//replace troca a primeira palavra pela segunda
alert(frase.replace("Japão", "Brasil"));
*/

/* 
ARRAY --> usa cochetes []
var lista = ["maça","Pêra","Laranja"];
lista.push("uva"); //  adicionar item á lista
console.log(lista);
lista.pop(); // retira o ultimo item da lista
console.log(lista.length); //ver quantidades de itens na lista
console.log(lista.reverse());// troca a ordem da lista
console.log(lista[0]);//  vai imprimir o primeiro item da lista 
console.log(lista.toString()); // mostra só as strings 
alert(lista [2]);// só vai imprimir a pêra
console.log(lista[0]); // vai imprimir maçã 
console.log(lista.toString()[0]);//vai imprimir o primeira letra da fruta 
console.log(lista.join(" - "));// substitui a virgula por traço 
*/

//DICIONÁRIO --> usa chaves {}

/* 
var frutas = {nome:"maçã", cor: "vermelha"}
console.log(frutas.nome);
alert(frutas.cor); 
*/

//LISTA DO DICIONÁRIO --> TERMINA COM COCHETE
/* 
var frutas = [{nome:"maçã", cor: "vermelha"}, {nome:"uva" , cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

//CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE
/* 
var idade = prompt("Qual sua idade?"); // prompt exibir uma pergunta
//var idade = 18; 
if (idade >= 18) {
    alert("Maior de idade");
} else{
    alert("Menor de idade");
};
 */
//ESTRUTURA DE REPETIÇÃO 
//(WHILE)
/* 
var count = 0;
while (count <= 5){
    console.log(count);
    //alert(count);
    count = count + 1; // ou count++; 
};
*/
//FOR
/* 
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

//DATE
/* 
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1);//mês, coloca o +1 pq ele puxa do zero
alert(d.getSeconds());
alert(d.getFullYear());
*/

//FUNÇÃO
/* 
function soma(n1, n2){
    return n1 + n2;//vai indicar qual calculo
}
 
function setReplace(frase, nome, novo_nome){ //replace troca a primeira palavra pela segunda
    return frase.replace(nome, novo_nome);
}
var validar = 0;
function validaIdade(idade){
    if(idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}

alert(soma(5, 10));// o alert vai mostrar o resultado a partir do que eu pedi
alert(setReplace("vai Japão", "Japão", "Brasil"));//replace troca a primeira palavra pela segunda

var idade = prompt("Qual sua idade?");//prompt --> exibe uma pergunta
validaIdade(idade)
//console.log(validar);
alert(validar);//exibe a resposta o return na pagina
*/

//BOTÕES - (manipulando elementos da página)
function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";//tag <b> NEGRITO
    //Obs--> usando o document eu coloco o agradecimento na pagina e não no alert
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}
function redirecionar(){
    window.open("https://digitalinnovation.one/");//window.open é a função que direciona pra outra página
    //window.location.href = "https://digitalinnovation.one/";//abre na mesma página
    //window.open --> abre em outra página
    //window.location.href --> abre na mesma página
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por pasar o mouse";
    elemento.innerHTML = "Obrigado por pasar o mouse";
    //eu uso o document pra fazer a troca do texto
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)//value puxa um valor
}


