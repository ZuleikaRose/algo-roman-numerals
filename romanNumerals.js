function toRomanLazy(num) {
  let output = "";
  const romanNumeralToArabic = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  const romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];

  for (const numeral of romanNumeralPriorityOrder) {
    if (num === 0) break;
    const value = romanNumeralToArabic[numeral];
    const count = Math.floor(num / value);
    output += numeral.repeat(count);
    num -= count * value;
  }

  return output;
}

function toRoman(num) {
  let output = "";
  // Same as the lazy version, plus the subtractive pairs (CM, CD, XC, XL, IX, IV)
  const romanNumeralToArabic = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const romanNumeralPriorityOrder = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",
  ];

  for (const numeral of romanNumeralPriorityOrder) {
    if (num === 0) break;
    const value = romanNumeralToArabic[numeral];
    const count = Math.floor(num / value);
    output += numeral.repeat(count);
    num -= count * value;
  }

  return output;
}

module.exports = { toRoman, toRomanLazy };
