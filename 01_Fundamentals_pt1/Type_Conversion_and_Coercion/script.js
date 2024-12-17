//type conversion: quando você converte um tipo de variavel manualmente
//type coercion: quando o javascript converte automaticamente um tipo de variavel

//type conv:
const inputYear = '2004';
console.log(Number(inputYear));  //func Number converte a string -com valores numéricos- para números
console.log(`In ${Number(inputYear) + 18} I turned 18.`);

console.log(`If you try to check if a string that does not contain a numeric value in it, you'll get a ${Number('Raquel')} return`);  //NaN: não converte strings que não contenham valores numéricos
console.log(Number('Raquel'));
console.log(typeof NaN);

console.log(`The type of the const inputYear is ${typeof Number(inputYear)} and it is ${inputYear}`);

console.log(String(18));  // func String e Number começam com letras maiusculas


//type coer:
console.log('I am ' + 20 + ' years old.');  // 23 turns out a String, '+' converts the value inside it into strings.
console.log('20' - '10' - 3);  // converts 20 and 10 into numbers
console.log('20' + '10' + 3);  // converts 3 into a String, since '+' does a concatenation
console.log('20' * '2');  // same to '/'

//guess the output

let n = '1' + 1;  // concatena virando uma string de '11'
console.log(n, 'uau');
n = n - 1;  // o operador de subtração converte a string pra number
console.log(n, '😮');
