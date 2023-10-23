console.log("************** DELIVERABLE 03 *********************");

//Clone
function clone(source) {
  return { ...source };
}

const source = { name: "Ana", surName: "Álvarez" };
const cloned = clone(source);

console.log("CLONE");
console.log("source = ", source);
console.log("cloned = ", cloned);

//Merge
function merge(source, target) {
  var result = clone(target);

  for (const property in source) {
    result[property] = source[property];
  }

  return result;
}

const aa = { name: "Maria", surname: "Ibañez", country: "SPA" };
const bb = { name: "Luisa", age: 31, married: true };

console.log("MERGE");
console.log(merge(aa, bb));
