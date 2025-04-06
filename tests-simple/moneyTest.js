import { formatCurrency } from "../../scripts/utils/money.js";

/*
Two types of test cases

1.basic test cases - tests to check if the code is working
2.edge cases - test with tricky values

*/

console.log('Test suite : formatCurrency')

console.log('converts cents to dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('Passed');
}else {
  console.log('Failed');
}

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('Passed');
}else {
  console.log('Failed');
}

console.log('Roundsup to nearest cent - 2000.5');

if (formatCurrency(2000.5) === '20.01') {
  console.log('Passed');
}else {
  console.log('Failed');
}

console.log('Roundsup to nearest cent - 2000.4');

if (formatCurrency(2000.4) === '20.00') {
  console.log('Passed');
}else {
  console.log('Failed');
}


