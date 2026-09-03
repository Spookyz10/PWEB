function calcMed(notas) {
  let amount = 0;
  for (let nota of notas) {
    amount += nota;
  }
  let media = amount / notas.length;

  if (media >= 7) {
    return [media, "Aprovado"];
  } else if (media < 7 && media > 5) {
    return [media, "Recuperação"];
  } else {
    return [media, "Reprovado"];
  }
}

function calcMedTurma(medias) {
  let total = 0;

  for (let media of medias) {
    total += media;
  }
  return total / medias.length;
}

function listarAlunos() {
  for (let aluno of alunos) {
    console.log("Nome: " + aluno.Nome);
    console.log("Idade: " + aluno.Idade);
    console.log("Curso: " + aluno.Curso);
    console.log("Notas: " + aluno.Notas);
    console.log("Matricula: " + aluno.Matricula);
  }
}

function mostrarAprovados() {
  for (let aprovado of alunosAprovados) {
    console.log(aprovado);
  }
}

function mostrarReprovados() {
  for (let reprovado of alunosReprovados) {
    console.log(reprovado);
  }
}

function mostrarMediaTurma() {
  console.log("A media da turma é: " + calcMedTurma(medias));
}

function mostrarAlunoDestaque() {
  console.log("O aluno destaque é: " + melhorAluno);
}

function cadastrarAluno() {
  let nome = prompt("Digite o nome do aluno: ");
  let idade = parseInt(prompt("Digite a idade do aluno: "));
  let curso = prompt("Digite o curso do aluno: ");
  let notas = [];
  for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt("Digite a nota " + (i + 1) + " do aluno: "));
    notas.push(nota);
  }

  let newAluno = {
    Nome: nome,
    Idade: idade,
    Curso: curso,
    Notas: notas,
    Matricula: true,
  };

  alunos.push(newAluno);
  console.log("Aluno cadastrado com sucesso!");
}

let alunos = [];
let alunosAprovados = [];
let alunosReprovados = [];

let aluno = {
  Nome: "Joao",
  Idade: 18,
  Curso: "Informatico",
  Notas: [2, 10, 12],
  Matricula: true,
};

let aluno2 = {
  Nome: "Maria",
  Idade: 16,
  Curso: "Eletro",
  Notas: [0, 0, 0],
  Matricula: true,
};

let aluno3 = {
  Nome: "Carlos",
  Idade: 12,
  Curso: "SI",
  Notas: [2, 133330, 1333332],
  Matricula: true,
};

let aluno4 = {
  Nome: "Joana",
  Idade: 14,
  Curso: "Letras",
  Notas: [2, 123, 112],
  Matricula: true,
};

let aluno5 = {
  Nome: "Macaco",
  Idade: 12,
  Curso: "Savana",
  Notas: [2, 2, 2],
  Matricula: true,
};

alunos.push(aluno, aluno2, aluno3, aluno4, aluno5);

console.log(`
================================
SISTEMA DA TURMA
================================
Bem-vindo ao sistema!
`);

console.log("Sistema desenvolvido por: Alvaro");
console.log("Curso: Informatica");

console.log("Campus Arapiraca");

let aprovados = 0;
let recuperação = 0;
let reprovados = 0;

let medias = [];

let melhorAluno;
let maiorMedia = 0;

for (let aluno of alunos) {
  let [media, state] = calcMed(aluno.Notas);

  medias.push(media);
  if (state === "Aprovado") {
    aprovados += 1;
    alunosAprovados.push(aluno.Nome);
  } else if (state === "Recuperação") {
    recuperação += 1;
  } else {
    reprovados += 1;
    alunosReprovados.push(aluno.Nome);
  }

  if (media > maiorMedia) {
    maiorMedia = media;
    melhorAluno = aluno.Nome;
  }
}

console.log("Escolha uma opção");
console.log("1 - listar alunos");
console.log("2 - mostrar aprovados");
console.log("3 - mostrar reprovados");
console.log("4 - mostrar media da turma");
console.log("5 - mostrar aluno destaque");
console.log("6 - cadastrar aluno");
console.log("0 - sair");

let escolha = "";

while (escolha !== "0") {
  escolha = prompt("Digite a opção desejada: ");
  switch (escolha) {
    case "1":
      listarAlunos();
      break;
    case "2":
      mostrarAprovados();
      break;
    case "3":
      mostrarReprovados();
      break;
    case "4":
      mostrarMediaTurma();
      break;
    case "5":
      mostrarAlunoDestaque();
      break;
    case "6":
      cadastrarAluno();
    case "0":
      console.log("Saindo do sistema...");
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
}
