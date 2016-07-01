

function sortyMcQuickSort(theArray) {
  var pivot;
  var leftArray;
  var rightArray;
  if(theArray.length <= 1) {
    return theArray;
  }
  pivot = theArray.splice(Math.floor(theArray.length/2),1);
  rightArray = theArray.filter(function(elmnt, indx, arr) {
      return elmnt >= pivot;
    });
  leftArray = theArray.filter(function(elmnt, indx, arr) {
      return elmnt < pivot;
    });
  return sortyMcQuickSort(leftArray).concat(pivot, sortyMcQuickSort(rightArray));
}

var randomArray = randomNumberArray(15, 50);
console.log('unsorted array: ', randomArray);
console.log('sorted: ', sortyMcQuickSort(randomArray));
// var sortValues = randomNumberArray(20, 20);

function randomNumberArray(num, max){
  var arrayOfNumbers = [];
  while(arrayOfNumbers.length < num) {
    var currentNum = Math.ceil(Math.random()*max);
    if(arrayOfNumbers.indexOf(currentNum) < 0) arrayOfNumbers.push(currentNum);
  }
  return arrayOfNumbers;
}

