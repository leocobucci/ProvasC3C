const getNextMultiple = (initialValue, multiple) => {
  let isMultiple = false;
  let value = initialValue
  do {
    value++;
    isMultiple = value % multiple === 0;
  } while (!isMultiple);
  return value;
};

function calc() {
  const scoreInteger = parseInt(document.getElementById("score").value);
  if (scoreInteger < 0 || scoreInteger > 100)
  return (document.getElementById("saida").value =
  "Somente valores entre 0 e 100");
  const nextMultiple = getNextMultiple(scoreInteger, 5);
  const valueDiference = nextMultiple - scoreInteger;
  const newScore = valueDiference < 3 ? nextMultiple : scoreInteger;
  if (newScore < 40)
    return (document.getElementById("saida").value = "Aluno Reprovado");
  return (document.getElementById("saida").value = "Aluno Aprovado");
}