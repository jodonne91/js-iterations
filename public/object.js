/*
  This function should accept an array as a parameter.
  It should return an object that contains the number of times each unique
    value showed up in the array.

  For instance, [ "a", "b", "c", "b" ] would produce { "a": 1, "b": 2, "c": 1 }
*/


var frequency = function(array) {

  var letter_array = [];

  var result = {};

  for ( var i = 0 ; i < array.length ; i++ )
  {

    if (letter_array.indexOf( array[i] ) === -1 )
    {

      result[array[i]] = 1;
      letter_array.push(array[i])

    }
    else
    {

      result[array[i]] += 1;

    }

  }

  return result;

}


/*
  This function should accept an array as a parameter.
  It should return an array that contains the unique values that showed up in the array.
  (Order of the values in the resulting array is not important.)

  For instance, [ "a", "b", "c", "b" ] would produce [ "a", "b", "c" ].
*/


var unique = function(array) {

  var letter_array = [];

  for ( var i = 0 ; i < array.length ; i++ )
  {

    if (letter_array.indexOf( array[i] ) === -1 )
    {

      letter_array.push(array[i])

    }
  
  }

  return letter_array;

}

/*
  This function should accept a number as a parameter.
  It should return the value of the number times 3.
*/
var tripler = function(number) {

  return number * 3;

}

/*
  This function should accept an object as a parameter.
  It should return the object with all of its values tripled.
*/
var objectTripler = function(numberObject) {

  for ( var num in numberObject )
  {

    numberObject[num] = tripler(numberObject[num])

  }

  return numberObject;

}

/*
  This function should accept two objects as parameters.
  It should return a single object that combines the properties of both the parameters.
  If a property is on both objects, use the value of the property on the left.

  For instance, ({ a: 1, b: 2 } and { b: 9, c: 3 }) would produce { a: 1, b: 2, c: 3 }
*/
var extend = function(left, right) {

  var result = {}

  for ( var name in right )
  {

    result[name] = right[name];

  }
  for ( var name in left )
  {

    result[name] = left[name];

  }

  return result;

}

/*
  This function should accept two parameters: an array of objects, and a string.
  It should return an array. The array should contain the values of 
    the named property in each object in the array.

  For instance, [{a: 1, b: 2}, {a: 3, c: 4}] for "a" would produce [1, 3]
*/

var pluck = function(objectArray, string) {


  var result = [];

  for ( var i = 0 ; i < objectArray.length ; i++ )
  {

    result.push(objectArray[i][string]);

  }

  return result;

}
