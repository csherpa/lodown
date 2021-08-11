'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identify: Function that return any value passed.
 * 
 * @param {Value} : Value can be any datatype passed as parameter.
 * @return {Value}: Returns value.
 * 
 */
 
function identity(value) {
    return value;
}
 module.exports.identity = identity;
 
 /**
 * typeOf: JavaScript operator that returns a string indicating the type of value passed.
 * 
 * @param {Value} : Value of any datatype. 
 * @return {String} : Returns a string of indicatiing the type of the value. Eg: 'string', 'array' etc..
 * 
 */
function typeOf(value) {
    if(value === null){
        return 'null';
    }
    else if(typeof value === 'string'){
        return 'string';
    }
    else if (Array.isArray(value)){
        return 'array'
    }
    else if(typeof value === 'object'){
        return 'object';
    }
    else if(typeof value === 'undefined'){
        return 'undefined';
    }
    else if(typeof value === 'number'){
        return 'number';
    }
    else if(typeof value === 'boolean'){
        return 'boolean';
    }
    else if(typeof value === 'function'){
        return 'function';
    }
}

module.exports.typeOf = typeOf;

/**
 * first: Function with input {Array and Number} which gives us the value of an
 *        array from the elements from 0Index to the given number passed.
 * 
 * @param {Array} array : Array that is being iterated over.
 * @param {Number} number : Number represents the total number of array[i]/elements
 *                        that is being returned from the {Array}
 *      
 * @return {Array} : New Array from the elements from 0Index to the given number passed.
 * 
 */
 
 function first(array, number) {
    if(!Array.isArray(array) || number < 1){
        return [];
    }
    else if(typeof number !== 'number'){
        return array[0];
    }
    else if(number > array.length) {
        return array;
    }
    return array.slice(array[0], number);
 }
 
 module.exports.first = first;
 
 
 /**
 * last: Function with input {Array and Number} which gives us the value of an
 *       array from the elements from array.length to the given number passed.
 * 
 * @param {Array} array: The collection (array) over which to iterate.
 * @param {Number} number: Number represents the total number of array[i]/elements
 *                        that is being returned from the {Array}
 * 
 * @return {Array} : New Array from the elements from array.length to the given number passed.
 * 
 */
 
 function last(array, number) {
    if(!Array.isArray(array)  || number < 1){
        return [];
    }
    else if (typeof number !== 'number'){
        return array[array.length - 1];
    }
    else if (number > array.length){
        return array;
    }
    return array.slice(array.length - number);
 }
 
 module.exports.last = last;
 
 /**
 * indeOf: Function that returns the first index at which a given element
 *         can be found in the array, or -1 if it is not present.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Value}: Can be of any datatype value
 * 
 * @return {Number} : Index value at which the element is found or -1 if not.
 */
 
 function indexOf(array, value) {
    for(let i = 0; i < array.length; i++) {
      if(array[i] === value){
        return i;
      }
    }
    return -1;
 }
 
 module.exports.indexOf = indexOf;
 
  
/**
 * contains: Function that checks if the array contains a specific value.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Value} : Can be of any datatype value.
 * 
 * @return {Boolean} : Returns Boolean value in terms if the element exits
 *                     in the array.
 */
 
 function contains(array, value) {
    return array.length < 0 ? false 
    : array.includes(value) ? true
    : array === value ? true : false;
 }
 
 module.exports.contains = contains;
 
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Function that iterates over an array and return a new array
 *         with all of the unique values in it.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * 
 * @return {Array} collection: New Array with all the unqiue values
 * 
 */
 
 function unique(array) {
     let newArr = [];
     for(let i = 0; i < array.length; i++) {
        // using indexOf function
        if(indexOf(newArr, array[i]) === -1){
            newArr.push(array[i]);
        }
     }
    return newArr;
 }
 
 module.exports.unique = unique;
 
 /**
 * filter: Function that iterates over a array to test each element of the array.
 *         Returns a value that coerces to true to keep the element in a new array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Funtion} func : Function to test on each element and gives a Boolean value.
 * 
 * @return {Array} collection: New Array with a value that pass the test to true.
 * 
 */
 
 function filter(array, func) {
     let newArr = [];
    //this function will iterate over all the values of the array
    each(array, (value, i, array) => {
        // console.log(i);
        if(func(array[i],i, array)) {
            newArr.push(array[i]);
        }
    });
    return newArr;
 }
 
 module.exports.filter = filter;
 
 
 /**
 * reject: Function that iterates over a array to test each element of the array.
 *         Returns a value that coerces to false to keep the element in a new array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Funtion} func : Function to test on each element and gives a Boolean value.
 * 
 * @return {Array} collection: New Array with a value that pass the test to false.
 * 
 */
 
 function reject(array, func) {
     let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            newArr.push(array[i])
        }
    }
    return newArr;
 }
 
 module.exports.reject = reject;
 
 /**
 * partition: Function that iterates over an array to test each element of the array.
 *            Each element that passes to true is placed in trueVal and false values in 
 *            falseVal array;
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Funtion} func : Function to test on each element and give a Boolean value.
 * 
 * @return {Array} collection: Multidimensional array; one with true values and other 
 *                             with false values.
 * 
 */
 
 function partition(array, func) {
    let trueVal = [];
    let falseVal = [];
    for(let i = 0; i< array.length; i++) {
        // console.log(array[i]);
        if(func(array[i], i, array)){
            trueVal.push(array[i]);
        }
        else{
            falseVal.push(array[i])
        }
    }
    return [trueVal, falseVal];
 }
 
 module.exports.partition = partition;
 
 
 /**
 * map : Function that iterates over the collection and implements
 *      func to each element in the collection.
 * 
 * @param {Collection} : The collection over which to iterate.
 * @param {Funtion} func : Function that is called for every element of array. 
 *                        Each time func executes, the returned value is added to newArray
 * 
 * @return {Array} : New array with each element being the result of the callback function
 * 
 */
 
 function map(collection, func) {
    let newArr = [];
    each(collection, function(value, i, collection){
        newArr.push(func(collection[i], i , collection));
    })
    return newArr;
 }
 
 module.exports.map = map;
 
 /**
 * pluck : Function that iterates over the collection and checks if object has the property.
 *       If it does push the matching property into a new array.
 * 
 * @param {Array} : The array over which to iterate.
 * 
 * @param {Property} : The property from object in the array that will be added into
 *                     a new array.
 * 
 * @return {Array} : Returns new array containing the value that matches the property of the array.
 * 
 */
 
 function pluck(array, property) {
    let arr = [];
    map(array, function(val, key, collection){
        arr.push(val[property]);
    });
        
    return arr;
 }
 
 module.exports.pluck = pluck;
 
 /**
 * every : Function that tests whether all elements in the array pass the test implemented by the
 *        provided function. It returns true when all elements pass else false.
 * 
 * @param {Collection} : The collection over which to iterate.
 * @param {Function} func : Function that will test for all element and return a boolean when all the
 *                         elements evaluate to true or false.
 *                      
 * @return {Boolean} :Return true if the function returns a truthy value for every array element. Otherwise, false.
 * 
 */
 
 function every(collection, func) {
     if(func === undefined){
       for(let i = 0; i < collection.length; i++){
           if(!collection[i]){
               return false;
           }
        }
        return true;
    }
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(!func(collection[i], i , collection )) {
              return false;
            }
            
        }
        return true;
    }
    else{
        for(let key in collection){
            if(!func(collection[key], key, collection) ) {
                return false;
            }
        }
        return true;
    }
 }
 
 module.exports.every = every;
 
 /**
 * some : Function that tests whether at least one elements in the array pass the test implemented by the
 *        provided function. If even one element pass the test it return true else false.       
 * 
 * @param {Collection} : The collection over which to iterate.
 * 
 * @param {Function} func : Function that test for all elements and return a boolean when at least one
 *                         elements evaluate to true else false.
 *                      
 * @return {Boolean} :Return true if the function returns a truthy value for at least one element. Otherwise, false.
 * 
 */
 
 function some(collection, func) {
     if(func === undefined){
       for(let i = 0; i < collection.length; i++){
           if(!collection[i]){
               return false;
           }
        }
        return true;
    }
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            //call func in each values, index and collection 
            if(func(collection[i], i , collection)){
                return true;
            }
        }
        return false;
    }
    else{
        for(let key in collection){
            // console.log(func(collection[key], key, collection));
            if(func(collection[key], key , collection)){
                return true;
            }
        }
        return false;
    }
 }
 module.exports.some = some;
 
 /**
 * reduce : Function that executes a callback function on each element of the array, 
 *         and returns a single output value. 
 * 
 * @param {Array} : The array over which to iterate.
 * @param {Function} func : A function to execute on each element in the array.
 *      
 * @param {Number} seed : A value to use as the first argument to the first call of the callbackFunc.
 *                       If not given, the first element in the array will be used as the seed.
 * 
 * @return {Value} :The single value that results from the reduction.
 * 
 */
 
 function reduce(array, func, seed){
    //check for the arguments.length 
    for(let i = 1; i < arguments.length; i++){
      if(arguments.length < 3){
        //If no initialValue is provided, then accumulator will be equal to the first value in the array
        seed = array[0];
        for(let i = 1; i < array.length; i++){
            //seed is the accumulator;
            seed = func(seed, array[i], i);
        }
        return seed;
      }
      else{
          for(let i = 0; i < array.length; i++){
              seed = func(seed, array[i], i);
          }
          return seed;
      }
    }
 }
 module.exports.reduce = reduce;
 
 
 /**
 * extend : Function that iterates over any amount of objects, copies all of its properties 
 *          from one or more source objects to a target object. Properties in the target object
 *          are overwritten by properties in the sources if they have the same key.
 * 
 * @param {Object} obj1 : The object that will inherit properties.
 * @param {Object} obj2 : The object from which it will inherit properties.
 * @param {Objects} ...args : The object from which it will inherit properties.
 * 
 * @return {Object} : Returns the modified target object.
 * 
 */
 
 function extend(obj1, obj2, ...args) {
    let newObj = Object.assign(obj1, obj2, ...args);
    return newObj;
 }
 module.exports.extend = extend;