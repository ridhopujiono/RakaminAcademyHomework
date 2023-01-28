const printColor = (color, text) => {
   switch (color) {
     case "red":
       console.log("\x1b[31m%s\x1b[0m", text);
       break;
     case "yellow":
       console.log("\x1b[33m%s\x1b[0m", text);
       break;
     case "green":
       console.log("\x1b[32m%s\x1b[0m", text);
       break;
      case "blue":
      console.log("\x1b[36m%s\x1b[0m", text);
      break;
     default:
       console.log(text);
   }
 };
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
 * @response int result
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

/**
 * to get total
 * @param array arr
 * @response int total
 *  */
 
function getTotal(arr){
   let total = 0;
   for(var i = 0; i < arr.length; i++){
      total += arr[i];
   }
   return total;
}
/**
 * to get average
 * @param array arr
 * @response int total/counter
 *  */
 
function getAverage(arr){
   let total = 0;
   let counter = 0;
   for(var i = 0; i < arr.length; i++){
      counter++;
      total += arr[i];
   }
   return total / counter;
}

/**
 * compare array to get new knowledge
 * @param any minArrayEven, minArrayOdd, maxArrayEven, maxArrayOdd, evenTotal, oddTotal, evenAverage, oddAverage
 * @response any
 *  */
 
function compareArray(minArrayEven, minArrayOdd, maxArrayEven, maxArrayOdd, evenTotal, oddTotal, evenAverage, oddAverage){
   if (minArrayEven > minArrayOdd) {
      printColor("red","\t - Nilai minimum array yang [INDEX-NYA] Genap lebih besar dari array yang [INDEX-NYA] Ganjil");
   } else {
      if (minArrayEven == minArrayOdd) {
         printColor("red","\t - Nilai minimum array yang [INDEX-NYA] Ganjil sama dengan array yang [INDEX-NYA] Index Genap");
      }else{
         printColor("red","\t - Nilai minimum array yang [INDEX-NYA] Ganjil lebih besar dari array yang [INDEX-NYA] Index Genap");
      }
   }
   if (maxArrayEven > maxArrayOdd) {
      printColor("red","\t - Nilai maksimum array yang [INDEX-NYA] Genap lebih besar dari array yang [INDEX-NYA] Ganjil");
   } else {
      if (maxArrayEven == maxArrayOdd) {
         printColor("red","\t - Nilai maksimum array yang [INDEX-NYA] Ganjil sama dengan array yang [INDEX-NYA] Index Genap");
      }else{
         printColor("red","\t - Nilai maksimum array yang [INDEX-NYA] Ganjil lebih besar dari array yang [INDEX-NYA] Index Genap");
      }
   }
   
   if(evenTotal == oddTotal){
      printColor("red","\t - Nilai total array yang [INDEX-NYA] Genap sama dengan array yang [INDEX-NYA] Ganjil");
   }else{
      printColor("red","\t - Nilai total array yang [INDEX-NYA] Genap tidak sama dengan array yang [INDEX-NYA] Ganjil");
   }

   if (evenAverage > oddAverage) {
      printColor("red","\t - Nilai rata-rata array yang [INDEX-NYA] Genap lebih besar dari array yang [INDEX-NYA] Ganjil");
   } else {
      if (evenAverage == oddAverage) {
         printColor("red","\t - Nilai rata-rata array yang [INDEX-NYA] Ganjil sama dengan array yang [INDEX-NYA] Index Genap");
      }else{
         printColor("red","\t - Nilai rata-rata array yang [INDEX-NYA] Ganjil lebih besar dari array yang [INDEX-NYA] Index Genap");
      }
   }
   return "";
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
// Total even odd
let evenTotal = getTotal(evenIndex);
let oddTotal = getTotal(oddIndex);
// Get average even odd
let evenAverage = getAverage(evenIndex);
let oddAverage = getAverage(oddIndex);



printColor("green", "==================================================================================================");
printColor("yellow", "SEMUA ARRAY");
console.log(printArray(randArray));
printColor("yellow","ARRAY DENGAN [INDEX] GENAP [INDEX KE - 0,2,4,5,6 .....]");
console.log(printArray(evenIndex));
printColor("yellow", "ARRAY DENGAN [INDEX] GANJIL [INDEX KE - 1,3,5,7,9 .....]");
console.log(printArray(oddIndex));

printColor("green", "==================================================================================================");

printColor("green", "==================================================================================================");
printColor("yellow", "MAKSIMUM ARRAY PADA [INDEX] ARRAY GENAP");
console.log(maxArrayEven);
printColor("yellow", "MAKSIMUM ARRAY PADA [INDEX] ARRAY GANJIL");
console.log(maxArrayOdd);
printColor("yellow", "MINIMUM ARRAY PADA [INDEX] ARRAY GENAP");
console.log(minArrayEven);
printColor("yellow", "MINIMUM ARRAY PADA [INDEX] ARRAY GANJIL");
console.log(minArrayOdd);
printColor("green", "==================================================================================================");
printColor("green", "==================================================================================================");
printColor("yellow", "TOTAL NILAI PADA ARRAY YANG INDEX-NYA GENAP");
console.log(evenTotal);
printColor("yellow", "TOTAL NILAI PADA ARRAY YANG INDEX-NYA GANJIL");
console.log(oddTotal);
printColor("yellow", "RATA RATA NILAI PADA ARRAY YANG INDEX-NYA GENAP");
console.log(evenAverage);
printColor("yellow", "RATA RATA NILAI PADA ARRAY YANG INDEX-NYA GANJIL");
console.log(oddAverage);
printColor("green", "==================================================================================================");
printColor("green", "==================================================================================================");
printColor("yellow", "KOMPARASI DUA ARRAY");
// compare array
let compareArrayResult = compareArray(minArrayEven, minArrayOdd, maxArrayEven, maxArrayOdd, evenTotal, oddTotal, evenAverage, oddAverage);
console.log(compareArrayResult);
printColor("green", "==================================================================================================");
