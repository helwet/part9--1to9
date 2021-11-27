var argsAsNum: Array<number> = [];
process.argv.forEach(function (value) {
  argsAsNum.concat(Number.parseInt(value));
});

interface result {
  trainingDays: number;
  success: boolean;
  rating: number;
  explanation: string;
  target: number;
  average: number;
}

function exCalculator(ex: Array<number>, target: number): result {
  var res;
  var sum;
  ex.forEach(function (value) {
    sum += value;
  });
  var avg = sum / ex.length;
  res.average = avg;
  res.success = false;
  res.target = target;
  res.trainingDays = ex.length;
  if (avg < target * 0.7) {
    res.rating = 1;
    res.explanation = "workout more you fat fuck";
  }
  if (avg < target) {
    res.rating = 2;
    res.explanation = "close, but you need to work harder next time";
  }
  if (avg > target) {
    res.rating = 3;
    res.explanation = "nice you reached your goal. Keep up the good work";
  }
  return res;
}
export default exCalculator;
