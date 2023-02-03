import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Desafio 3 - Estrutura de Dados</h1>
    </div>
  );
}

// 01- Crie um array que receba 5 itens e exiba no console.

let alunos = ["Will", "Charles", "Janice", "Anna Julia", "Cesar"];
console.log(alunos);

// 02- Utilize um método para adicionar um nome ao inicio do array.

alunos.unshift("Alessandra");
console.log("Nova atualização no Array:", alunos);

// 03- Utilize um método para remover o último nome do array.

alunos.pop();
console.log("Nova atualização no Array:", alunos);

// 04- Utilize um método para adicionar dois nomes ao fim do array.

alunos.push("Juliana", "Ana Clara");
console.log("Nova atualização no Array:", alunos);

// 05- Utilize um método para remover o primeiro nome do array.

alunos.shift();
console.log("Nova atualização no Array:", alunos);

// 06 Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort();
console.log(numbers);

// 07 Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = {
  nome: "Maria Alessandra",
  idade: 25,
  profissao: "Secretaria"
};

// 08 Adicione uma nova propriedade sem alterar seu objeto inicial.

(sobreMim.time = "Flamengo"), console.log(sobreMim);

// 09 Remova uma propriedade desse objeto.

delete sobreMim.idade;
console.log(sobreMim);

// 10- Mostre no console todas as propriedades desse objeto.

console.log(sobreMim);

// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
  {
    nome: "Maria",
    idade: 25,
    telefone: 22454021,
    amigos: ["Mara", "Jonas", "Cesar", "Raissa"]
  },
  {
    nome: "Joy",
    idade: 25,
    telefone: 22454028,
    amigos: ["Erik", "Cicero", "Jose", "Raul"]
  },
  {
    nome: "Carol",
    idade: 28,
    telefone: 22454029,
    amigos: ["Maria", "Jonathan", "Carlos", "Raimunda"]
  },
  {
    nome: "Luan",
    idade: 22,
    telefone: 22454038,
    amigos: ["Mariana", "Erik", "João", "Carol"]
  },
  {
    nome: "Mari",
    idade: 25,
    telefone: 22454048,
    amigos: ["Maria", "Marilia", "Mariana", "Marlucia"]
  }
];

// 12- Mostre no console o nome de um amigo de cada lista.

console.log("Aqui é o cadastro", cadastro);
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[3]);
