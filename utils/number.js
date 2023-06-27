// format number to string. eg: 1000 to 1k
export function formatNumber(number) {
  const abbreviations = {
    k: 1000,
    m: 1000000,
    b: 1000000000,
  };

  for (const abbreviation in abbreviations) {
    if (number >= abbreviations[abbreviation]) {
      const dividedNumber = number / abbreviations[abbreviation];

      if (dividedNumber >= 1 && dividedNumber < 1000) {
        if (Math.floor(dividedNumber) === dividedNumber) {
          return dividedNumber + abbreviation;
        } else {
          return dividedNumber.toFixed(1) + abbreviation;
        }
      }
    }
  }

  return number.toString();
}

export function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
}
