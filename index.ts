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