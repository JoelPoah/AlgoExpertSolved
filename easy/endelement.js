function moveElementToEnd(array, toMove) {
  let count = 0;

  

  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      count += 1;
    } 
  }

  filtered_array = array.filter((element)=>(element!=toMove))
  const array_of_toMoves = Array(count).fill(toMove);
  const final_array = filtered_array.concat(array_of_toMoves);

  return final_array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
