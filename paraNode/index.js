const getPessoasPosFiltro = (arranjoDePessoas, nome) => {
  return arranjoDePessoas.filter(pessoa => pessoa.nome.startsWith(nome[0]));
}

const getIdadeMedia = (arranjoFiltradoDePessoas) => {
  return arranjoFiltradoDePessoas.reduce((total, pessoa) => total + pessoa.idade, 0) / arranjoFiltradoDePessoas.length;
}

const output = (arranjoDePessoas, nome) => {
  const pessoas = getPessoasPosFiltro(arranjoDePessoas, nome).map(pessoa => pessoa.nome);
  const media = getIdadeMedia(getPessoasPosFiltro(arranjoDePessoas, nome));
  return {pessoas, media};
}

const arranjoDePessoas = [{nome: "Breno", idade: 22}, {nome: "Marcus", idade: 21}, {nome: "Bruna", idade: 24}];
const seuNome = "Breno";
console.log(output(arranjoDePessoas, seuNome));