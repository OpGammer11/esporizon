export function formatNumber(number) {
  const abbreviations = {
    k: 1000,
    m: 1000000,
    b: 1000000000,
  };

  for (const abbreviation in abbreviations) {
    if (number >= abbreviations[abbreviation]) {
      const formattedNumber = (number / abbreviations[abbreviation]).toFixed(1);
      if (formattedNumber.endsWith('.0')) {
        return formattedNumber.slice(0, -2) + abbreviation;
      }
      return formattedNumber + abbreviation;
    }
  }

  return number.toString();
}
