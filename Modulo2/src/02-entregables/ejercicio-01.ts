console.log("************** DELIVERABLE 01 *********************");
//Head
const head = (inputArray) => {
  const [first] = inputArray;

  return first;
};

const myArray = [1, 2, 3, 4];
console.log("HEAD --> El primer elemento de ", myArray, " es ", head(myArray));

//Tail
const tail = (inputArray) => {
  const [first, ...rest] = inputArray;
  return rest;
};

console.log("TAIL --> La cola de ", myArray, " es ", tail(myArray));

//Init
const init = (inputArray) => {
  return inputArray.filter(
    (element) => inputArray.indexOf(element) < inputArray.length - 1
  );
};

console.log("INIT --> EL inicio de ", myArray, " es ", init(myArray));

//Last
const last = (inputArray) => {
  return inputArray[inputArray.length - 1];
};

console.log("Last --> El último elemento de  ", myArray, " es ", last(myArray));
