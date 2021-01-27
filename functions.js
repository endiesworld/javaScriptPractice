console.log("//********") ;

const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

ifElse(true,
 () => { console.log(true);},
 () => { console.log(false);}
);

let answer ;

const increment = n =>   n + 1 ;

const square = n => n * n;

const doMathSoIDontHaveTo = (n, func) =>  func(n) ;

answer = doMathSoIDontHaveTo(5, square); //25
console.log("Answer is equal to: ", answer) ;

answer = doMathSoIDontHaveTo(answer, increment); 

console.log("Answer is equal to: ", answer) ;

console.log("********\\") ;