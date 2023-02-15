// Import stylesheets
import './style.css';

//hello world
console.log("olá world");
let x = 10;
console.log("o valor do x é " + x);

// declarações variáveis
let texto: string = `testando um texto com concatenação do número ${x}`;
console.log(texto);

// condicionais if else
if (x%2==0){
  console.log(`${x} é PAR`);
} else {
  console.log(`${x} é ÍMPAR`);
}

// laço de repetição for
for(let i = 1; i <= 10; i++){
  console.log(i)
}

//varrendo array
console.log('varrendo um array!')
let numbers:number[] = [10,20,30];
for (let i = 0; i< numbers.length; i++) {
  console.log(numbers[i]);
}

//varrendo array com forEach
numbers.forEach((n) => {
  console.log(n);
});

//tupla 
let eu = ['dunga e Everson', 20];
console.log(`meus brothers são ${eu[0]} e eles têm ${eu[1]} anos`);

//enum (baseado em números, começando no zero, e para cada opção é assinalado um número incrementado por um. Isso é útil quando o valor em si não importa.)
enum Color {
  Red=1, 
  Green=2, 
  Blue=3,
};
let color: Color = Color.Green;

//A sintaxe de tipo para declarar uma variável no TypeScript é incluir dois pontos (:) após o nome da variável, seguido por seu tipo.

//any
let semCerteza: any = 4;
semCerteza = 'acho que sou um dunga';

//functions
function getSoma(n1: number, n2:number): number{
  return n1 + n2;
}

console.log(`a soma de 5 e 8 é ${getSoma(5,8)}`)

function getNomeCompleto(pessoa: {nome: string, sobrenome: string}): string{
  return `${pessoa.nome} ${pessoa.sobrenome}`;
}

console.log(`meu nome completo é ${getNomeCompleto({nome: 'dunga', sobrenome: 'alves'})}`);

