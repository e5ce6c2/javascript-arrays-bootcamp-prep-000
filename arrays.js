
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)
{
  var Array = [element, ...array]
  return Array
}

function destructivelyAddElementToBeginningOfArray()
{
  return array.unshift(element)
}
