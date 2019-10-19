function findMinAndRemove(array){
  let min = Math.min.apply(null, array);
  array.splice(array.indexOf(min));
  return array;
}

function insertionSort(array){
  let len = array.length;
  for(let i = 1; i < len; i++){
    let j = i - 1;
    let elem = array[i];
    while(j >= 0 && array[j] > elem){
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = elem;
  }
  return array;
}
