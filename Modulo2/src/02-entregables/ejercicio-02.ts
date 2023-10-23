console.log("************** DELIVERABLE 02 *********************");

const concat = (a, b) => {
  return [...a, ...b];
};

const concatOpcional = (...arrayList) => {
  return arrayList.reduce((acc, current) => concat(acc, current));
};

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c", "d"];
const array3 = ["rojo", "azul"];
console.log("array1 = ", array1);
console.log("array2 = ", array2);
console.log("array3 = ", array3);
console.log("concat(array1, array2) = ", concat(array1, array2));
console.log(
  "concatOpcional(array1, array2, array3) = ",
  concatOpcional(array1, array2, array3)
);
