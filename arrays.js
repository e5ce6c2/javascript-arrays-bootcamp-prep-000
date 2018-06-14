
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)
{
  var Array = [element, ...array]
  return Array
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element)
{
  var Array = [...array, element]
  return Array
}

function destructivelyAddElementToEndOfArray(array, element)
{
  return array.pop(element)
}

function accessElementInArray(array, index)
{
  return array[index]
}

function removeElementFromBeginningOfArray(array)
{
  var Array = array.splice(1)
  return Array
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  return array.splice(1)
}

function removeElementFromEndOfArray(array)
{
  var Array = array.splice()
  return Array.splice
}
