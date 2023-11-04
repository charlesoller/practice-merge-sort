// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if(arr.length <= 1){
    return arr;
  }

  // Divide the array in half
  let middle = Math.floor(arr.length / 2);
  // console.log("mid", middle)
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  // Recursively sort the left half
  let sortedLeft = mergeSort(left);
  // Recursively sort the right half
  let sortedRight = mergeSort(right);

  // Merge the halves together and return
  return merge(sortedLeft, sortedRight)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  // console.log("Arr A", arrA, "Arr B", arrB)
  if(!arrA.length) return arrB;
  if(!arrB.length) return arrA;

  let ans = [];
  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...

  while(indexA < arrA.length || indexB < arrB.length){
    // Compare the first values of each array
    if(arrA[indexA] < arrB[indexB]){
      // Add the smaller value to the return array
      ans.push(arrA[indexA]);
      indexA++;
    } else {
      ans.push(arrB[indexB])
      indexB++;
    }
    // Move the pointer to the next value in that array
  }
  // Return the return array
  return ans;
}

module.exports = [merge, mergeSort];
