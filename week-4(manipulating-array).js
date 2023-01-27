/**
 * to print array become string
 * @param array arr
 * @response string
 *  */
function printArray(arr){
    return("[\n" + arr.join(", ") + "\n]");
}

// Generate a random array
let randArray = Array.from({length: 100}, () => Math.floor(Math.random() * 50) + 1);