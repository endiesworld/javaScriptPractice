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

  

console.log("********\\") ;