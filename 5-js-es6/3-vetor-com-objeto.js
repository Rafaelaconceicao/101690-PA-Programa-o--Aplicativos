const usuarios= [
    {nome: 'Marta', idade: 30},
    {nome: 'José', idade: 40},
    {nome: 'Maria', idade:50},
    {nome: 'Marcela', idade:60}
]

console.log('n/Exibindo todos os usuários do vetor:')
usuarios.forEach(u => console.log('${u.nome} tem ${u.idade} anos.'))

console.log('\nFiltrando usuários com idade acima de 50 anos:');
const maiordecinquenta = usuarios.filter(u => u.idade > 50);
maiordecinquenta.forEach(u => console.log(`${u.nome} tem ${u.idade} anos.`));

console.log('\nExibindo apenas os nomes:');
const nomes = usuários.map(u => u.nome);
nomes.forEach(nome => console.log(`${nome};`));


console.log('n/Encontrando um usuário: ')
const usuarioEncontrado = usuarios.find(u => u.nome === 'Marta')
console.log(usuarioEncontrado)
console.log('${usuarioEncontrado.nome} tem ${usuarioEncontrado.idade} anos.')

console.log('n/Mostra a soma de todas as idades: ')
const somaIdades = usuarios.reduce((total, u) => total + u.idade, 0)
console.log('total das idades: ${somaIdades} ')



