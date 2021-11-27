function calculateBmi(h: number, w: number): string {
  const bmi = Math.pow(w / (h / 100), 2);

  if (bmi < 15) return "underweight (Severe thinness) ";
  if (bmi >= 15 && bmi < 16) return "Underweight (Moderate thinness)";
  if (bmi >= 16 && bmi < 18.5) return "Underweight (Mild thinness) 	";
  if (bmi >= 18.5 && bmi < 25) return "Normal range";
  if (bmi >= 25 && bmi < 30) return "Overweight Pre-obese) ";
  if (bmi >= 30 && bmi < 35) return "Obese (Class I)";
  if (bmi >= 35 && bmi < 40) return "Obese (Class II)";
  return "Obese (Class III)";
}
interface bmiJson {
  heigth: number;
  weigth: number;
  bmi: string;
}
function bmiProperFormat(h: number, w: number): bmiJson {
  var res: bmiJson;
  res.heigth = h;
  res.weigth = w;
  res.bmi = calculateBmi(h, w);
  return res;
}

console.log(calculateBmi(180, 74));

export default bmiProperFormat;
