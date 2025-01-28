const friends = ['Maria', 'Diego', 'Sla'];

// Adicionar elementos
// .push() retorna o tamanho do array, se printar newLength vai mostrar o tamanho do array
const newLength = friends.push('Ninguém'); // .push() -> método que adiciona um elemento ao final do array
console.log(friends);
console.log(newLength);

const newNewLength = friends.unshift('Hmmm, sei lá'); // .unshift() -> adiciona elementos ao início do array
console.log(friends);
console.log(newNewLength);

// Remover elementos
friends.pop(); // remove o último elemento do array
// o método .pop() retorna o elemento rempovido da vez:
const popped = friends.pop();

console.log(friends);
console.log(popped);

// retorna o elemento removido da vez:
friends.shift(); // remove o primeiro elemento do array
console.log(friends);

console.log(friends.indexOf('Maria')); // retorna o endereço que o elemento está locado

friends.push(4);
console.log(friends.includes('Diego')); // retorna true se o elemento existe, e false se não existe
console.log(friends.includes(4));

if (friends.includes('Diego' || 'Maria')) {
    console.log(`Você é amiga do Diego ou da Maria?`)
}
