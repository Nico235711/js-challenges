const trialDivision = (number) => {
  let dividersAmount = 0
  for (let index = 0; index <= number; index++) {
    if (number % index === 0) dividersAmount++
  }
  return (dividersAmount === 2) ? true : false
}

module.exports = trialDivision;