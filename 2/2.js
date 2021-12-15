function checkNumber(number) {
  return number !== -1;
}
function sortByHeight(arr) {
  var people = arr.filter(checkNumber);

  people.sort();
  console.log(people, arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = people.shift();
    }
  }
  return arr;
}

const array = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(array));
