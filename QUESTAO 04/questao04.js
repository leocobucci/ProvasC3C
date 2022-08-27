function verifyMultiple(value, multiple) {
  return value % multiple === 0;
}

function doSequence(finalValue) {
  const result = [];
  for (let index = 1; index <= finalValue; index++) {
    const is_multiple_five = verifyMultiple(index, 5);
    const is_multiple_nine = verifyMultiple(index, 9);
    if (is_multiple_five && is_multiple_nine) {
      result.push("LuidyMoura");
      continue;
    }
    if (is_multiple_five) {
      result.push("Luidy");
      continue;
    }
    if (is_multiple_nine) {
      result.push("Moura");
      continue;
    }
    result.push(index.toString());
  }
  return result;
}

function calc() {
  const value = document.getElementById("value").value;
  const isInteger = value === parseInt(value, 10).toString();
  if (!isInteger)
    return (document.getElementById("saida").value =
      "Aceito somente valores inteiros");
  const valueRounded = Math.round(value);
  const integerValue = parseInt(valueRounded);
  if (value < 0)
    return (document.getElementById("saida").value =
      "Aceito somente valores positivos");
  const sequence = doSequence(integerValue).join(", ");
  return (document.getElementById("saida").value = sequence);
}
