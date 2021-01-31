console.log("//********") ;

let _ = {} ;

// underscore on each
_.each = function(list, callBack){
    for(let i = 0 ; i<list.length ; i++){
      callBack(list[i], i, list)
    }
  } ;

// function for map returns new array
_.map =  function(list, callBack ){
   let arrayHolder = [] ;
  _.each(list, function(value , index, list){
    arrayHolder.push(callBack(value, index, list)) ;
  })
  return arrayHolder ;
  }

  //function for filter. returns a filtered array, base on the filter condition in the callback function
  _.filter = function (list, callBack){
     let arrayHolder = [] ;
  _.each(list, function(value , index, list){
    arrayHolder.push(callBack(value, index, list)) ;
  })
  return arrayHolder ;
  }

  _.reduce = function (list, callBack, iniitalValue = 0){
    let accumulator = iniitalValue;
    for(let i = 0 ; i<list.length ; i++){
      accumulator = callBack(list[i], accumulator) ;
    }
    return accumulator ;
  }


console.log("********\\") ;

let newArray = [2,3, 5] ;

let myReducerFunction = (value, accum) => value + accum ;

const sumOfArray = _.reduce(newArray, myReducerFunction , 0) ;
console.log("Sum of array is: ", sumOfArray) ;

//Common element filter function among input arrays
function intersection(...arrays) {
  let parentArrays = arrays ;
  let samplingArrayElement = arrays[0] ;
  let commonElement = [] ;
  
  const samplingFunction = function (valueFromReduce, currentValueindex, accumulatorFromReduce){
    let commonElementCount = 0 ;
    for(let parentArrayIndex = 1 ; parentArrayIndex < parentArrays.length ; parentArrayIndex++){
      if(parentArrays[parentArrayIndex].includes(valueFromReduce)){
        commonElementCount = commonElementCount + 1 ;
      }
      else{
        break ;
      }
    }
    if(commonElementCount === parentArrays.length - 1){
      accumulatorFromReduce.push(valueFromReduce)
    }
    return accumulatorFromReduce ;
  }
  
  commonElement = _.reduce(samplingArrayElement, samplingFunction, commonElement)
  return commonElement ;
}