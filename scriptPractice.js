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

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const roomsFilter = value => value.rooms ;

const rooms = _.filter(newDevelopment, roomsFilter) ;

console.log("rooms: ", rooms) ;

// const roomsWithFalseValue = (accumulator, currentValue) => {
//   for (value in currentValue) {
//     if(!accumulator[value.])
//    accumulator.push(currentValue)
//   }
// }

let newArray = [2,3, 5] ;

let myReducerFunction = (value, accum) => value + accum ;

const sumOfArray = _.reduce(newArray, myReducerFunction , 0) ;
console.log("Sum of array is: ", sumOfArray) ;