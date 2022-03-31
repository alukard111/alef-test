export { 
  validationName,
  validationAge,
  isAgeStartedZero,
  errorTextLengthName,
  idRandom
}
function validationName(name) {
  const regName = /^([а-яА-ЯЁё\s]{2,120}(\-[а-яА-ЯЁё\s]{2,120})*)$/
  return regName.test(name)
}
function validationAge(age) {
  const regAge = /^[0-9]{1,2}$/
  return regAge.test(age)
}

function isAgeStartedZero(age) {
  return age.split('')[0] === '0'
}

function errorTextLengthName(name) {
  return Boolean(name.length > 1)
}

function idRandom() {
  return Math.floor(Math.random() * (10000 - 1) + 1).toString()
}
  
  
