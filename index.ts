//Import stylesheets
import { MyTimer } from './mytimer';
import './style.css';

document.getElementById('parimpar-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('parimpar-input')).value
  );
  if (num % 2 == 0) {
    document.getElementById('parimpar-div').innerHTML = 'O numero é PAR';
  } else {
    document.getElementById('parimpar-div').innerHTML = 'O número é IMPAR';
  }
});

document.getElementById('tabuada-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('tabuada-input')).value
  );
  const table = document.getElementById('tabuada-table');
  table.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const row = table.insertRow();
    const cel1 = row.insertCell();
    const cel2 = row.insertCell();
    cel1.innerHTML = `${num} x ${i} =`;
    cel2.innerHTML = `${num * i}`;
  }
});

document.getElementById('aleatorios-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('aleatorios-input')).value
  );
  const table = document.getElementById('aleatorios-tbody');
  table.innerHTML = '';
  for (let i = 1; i <= num; i++) {
    const row = table.insertRow();
    const cel1 = row.insertCell();
    const cel2 = row.insertCell();
    cel1.innerHTML = `${i}`;
    cel2.innerHTML = `${Math.trunc(Math.random() * 50)}`;
  }
});

let myTimer = new MyTimer(document.getElementById('temporizador-span'));
document
  .getElementById('temporizador-start-button')
  .addEventListener('click', () => {
    myTimer.start();
  });

document
  .getElementById('temporizador-stop-button')
  .addEventListener('click', () => {
    myTimer.stop();
  });

// //hello world
// console.log('olá world');
// let x = 10;
// console.log('o valor do x é ' + x);

// // declarações variáveis
// let texto: string = `testando um texto com concatenação do número ${x}`;
// console.log(texto);

// // condicionais if else
// if (x % 2 == 0) {
//   console.log(`${x} é PAR`);
// } else {
//   console.log(`${x} é ÍMPAR`);
// }

// // laço de repetição for
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //varrendo array
// console.log('varrendo um array!');
// let numbers: number[] = [10, 20, 30];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// //varrendo array com forEach
// numbers.forEach((n) => {
//   console.log(n);
// });

// //tupla
// let eu = ['dunga e Everson', 20];
// console.log(`meus brothers são ${eu[0]} e eles têm ${eu[1]} anos`);

// //enum (baseado em números, começando no zero, e para cada opção é assinalado um número incrementado por um. Isso é útil quando o valor em si não importa.)
// enum Color {
//   Red = 1,
//   Green = 2,
//   Blue = 3,
// }
// let color: Color = Color.Green;

// //A sintaxe de tipo para declarar uma variável no TypeScript é incluir dois pontos (:) após o nome da variável, seguido por seu tipo.

// //any
// let semCerteza: any = 4;
// semCerteza = 'acho que sou um dunga';

// //functions
// function getSoma(n1: number, n2: number): number {
//   return n1 + n2;
// }

// console.log(`a soma de 5 e 8 é ${getSoma(5, 8)}`);

// function getNomeCompleto(pessoa: { nome: string; sobrenome: string }): string {
//   return `${pessoa.nome} ${pessoa.sobrenome}`;
// }

// console.log(
//   `meu nome completo é ${getNomeCompleto({
//     nome: 'dunga',
//     sobrenome: 'alves',
//   })}`
// );
