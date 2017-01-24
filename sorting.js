var arr_to_sort = [10,8,7,2,5,3,1];

function sort_things(arr) {
  var temp;
  var swap;
  for (var i = 0; i < arr.length; i++) {
    console.log("arr[i]", arr[i]);
    while (swap === true) {

      console.log("while");
      if (arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        console.log("arr[i]", arr[i], "arr[i+1]", arr[i+1]);
        swap = true;
      }
      swap = false;
    }
  }
  return arr;
}


console.log(sort_things(arr_to_sort));
