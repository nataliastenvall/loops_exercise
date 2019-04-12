function printEven() {
  for (let i = 2; i <= 100; i = i + 2) {
    console.log(i);
  }
}

printEven();

function printNumbers(howMany) {
  for (let i = 1; i <= howMany; i++) {
    console.log(i);
  }
}

printNumbers(9);

function numbersBetween(a, b) {

  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}

numbersBetween(3, 6);

function printStars(number) {
  var a = '';
  for (let i = 0; i < number; i++) {
    a = a + '*';
  }
  console.log(a);
}

printStars(8);

function printSquare(number) {
  for (let i = 0; i < number; i++) {
    printStars(number);
  }
}
printSquare(4);

function printRectangle(width, height) {
  for (let i = 0; i < height; i++) {
    printStars(width);
  }
}
printRectangle(17, 3);

function printTriangle(size) {
  for (let i = 0; i < size; i++) {
    printStars(i + 1);
  }
}
printTriangle(5);



function heading(text) {
  console.log(text);
  console.log('---------------')
}



let text = '';

function printText(text) {
  console.log(text);
}

function printDash(text) {
  let dash = '';
  for (let i = 0; i < text.length; i++) {
    dash = dash + '=';

  }
  console.log(dash);
}
printText('ghgjhgjkgk');
printDash('ghgjhgjkgk');

var string = '';

function printAnyUnderlined(string) {
  console.log(string);
  printDash(string);
}
printAnyUnderlined('anyany');


function seriesSum(n) {
  let x = 0;
  for (let i = 0; i <= n; i++) {
    x = x + i;
  }
  return x;

}
console.log(seriesSum(3));

function factorial(n) {
  let result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(10));

function factorialNew(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorialNew(n - 1);
  }
}
console.log(factorialNew(10));


function run() {
  heading('Ex1');
  printEven();
  heading('Ex2');
  printNumbers(9);
  heading('Ex3');
  numbersBetween(3, 6);
  heading('Ex4');
  printStars(8);
  heading('Ex5');
  printSquare(4);
  heading('Ex6');
  printRectangle(17, 3);
  heading('Ex7');
  printTriangle(5);
  heading('Ex8');
  console.log(seriesSum(3));
  heading('Ex9');
  console.log(factorial(10));
  heading('Ex10');
  console.log(factorialNew(10));
  heading('Ex11');
  printAnyUnderlined('anyany');
}
run();
