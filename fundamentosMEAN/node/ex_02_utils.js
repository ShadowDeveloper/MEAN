function upper(text) {
  return text.toUpperCase();
}

function lower(text) {
  return text.toLowerCase();
}

module.exports = { upper, lower }
// Para exportar a função como objeto (Método utilizado no EcmaScript2015, se fosse javascript tradicional teria que usar {upper: upper})