const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
  return a- b;
	
};

const sum = function(array) {
  
  let sum = 0;
for (let i in array) {
  sum += array[i];
}
return sum;
	
};

const multiply = function(array) {
  let mult = 1;
for (let i in array) {
  mult *= array[i];
}
return mult;

};

const power = function(a, b) {
  if (b == 0) { return 0;}
  var pow = a;
  for (let i = 1; i < b; i++) {
    pow = pow * a; 
    console.log(pow);
  }
  return pow;
};

const factorial = function(a) {

  let fact = 1;
  for (let i = 1; i <= a; i ++) {
    fact = fact * i;
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

