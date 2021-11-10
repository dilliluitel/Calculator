(() => {
  //Elements
  var numbers = document.getElementsByClassName("digit");
  var equal = document.getElementById("equal");
  var total = document.getElementById("fname");
  var operator = document.getElementsByClassName("sign");
  var clear = document.getElementById("clear");
  var value1, value2;

  console.log(numbers);
  //console.log(equal);
  console.log(total);
  console.log(operator);

  //classes
  class Calculator {
    constructor() {
      this.total = 0;
      this.temp = 0;
      this.operator = "";
    }

    addToTemp(number) {
      this.temp = this.temp * 10 + parseInt(number);
      this.display();
    }

    equal() {
      this.temp = parseInt(value1 + operator.value + this.temp);
      // switch (operator) {
      //   case "+":
      //     this.temp = value1 + this.temp;
      //     break;

      //   case "-":
      //     this.temp = value1 - this.temp;
      //     break;

      //   case "x":
      //     this.temp = value1 * this.temp;
      //     break;

      //   case "/":
      //     this.temp = value1 / this.temp;
      //     break;

      //   default:
      //     break;
      // }
      this.display();
    }

    display() {
      total.value = this.temp;
      console.log(this.temp);
    }
    operate(operator) {
      value1 = this.temp;
      this.operator = operator;
      this.temp = 0;
      this.display();
    }
    clear() {
      value1 = 0;
      this.temp = 0;
      this.operator = null;
      display();
    }
  }

  var calc = new Calculator();
  //Eventlistners
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      calc.addToTemp(this.innerText);
    });
  }
  for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
      calc.operate(this.innerText);
    });
  }

  equal.addEventListener("click", () => {
    calc.equal();
  });

  clear.addEventListener("click", () => {
    calc.clear();
  });
})();
