/**
 * to print array become string
 * @param array arr
 * @response string
 *  */
function printArray(arr){
    return("[\n" + arr.join(", ") + "\n]");
}


/**
 * Split index by type
 * @param array arr
 * @param string type
 * @response string result
 *  */
function splitIndex(arr, type){
    let result = [];
    for(let i = 0; i < arr.length; i++){
       if (type == "even") {
          if (i %2 == 0)  {
             result.push(arr[i]);
          }
       } else {
          if (i %2 != 0) {
             result.push(arr[i]); 
          }
       }
    }
    return result;
 }

/**
 * to find min and max
 * @param array arr
 * @param string type
 * @response string result
 *  */
function findMaxMin(arr, type){
    let result = arr[0];
    for(var i = 0; i < arr.length; i++){
          result = (type == "max" ?  arr[i] > result : arr[i] < result) ?
              arr[i] 
          : 
             result;
    }
    return result;
 }


// Generate a random array
let randArray = Array.from({length: 100}, () => Math.floor(Math.random() * 50) + 1);
// Get even and odd index
let evenIndex = splitIndex(randArray, "even");
let oddIndex = splitIndex(randArray, "odd");
// max
let maxArrayEven = findMaxMin(evenIndex, 'max');
let maxArrayOdd = findMaxMin(oddIndex, 'max');
// min
let minArrayEven = findMaxMin(randArray, 'min');
let minArrayOdd = findMaxMin(randArray, 'min');

console.log("============================================");
console.info("SEMUA ARRAY");
console.log(printArray(randArray));
console.info("ARRAY DENGAN [INDEX] GENAP");
console.log(printArray(evenIndex));
console.info("ARRAY DENGAN [INDEX] GANJIL");
console.log(printArray(oddIndex));
console.log("============================================");
console.info("MAKSIMUM ARRAY PADA [INDEX] ARRAY GENAP");
console.log(maxArrayEven);
console.info("MAKSIMUM ARRAY PADA [INDEX] ARRAY GANJIL");
console.log(maxArrayOdd);
console.info("MINIMUM ARRAY PADA [INDEX] ARRAY GENAP");
console.log(minArrayEven);
console.info("MINIMUM ARRAY PADA [INDEX] ARRAY GANJIL");
console.log(minArrayOdd);
console.log("============================================");