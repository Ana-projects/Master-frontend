console.log("************** CHALLENGES *********************");
console.log(
  "Use this folder 02 challenges to practice with challenge exercises"
);
console.log("You can add new files as long as they are imported from index.ts");

console.log("-- CONSOLE TRACES --");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([2000, "third"]),
  async () => await showMessage([1000, "second"]),
];

const run = async (triggers) => {
  for (let i = 0; i < triggers.length; i++) {
    await triggers[i]();
  }
  console.log("first");
};

//run(triggers);

//---------------------------
console.log("\n-- DEEP ACCESS --");
console.log("deepGet");

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (obj, ...props) => {
  if (props.length === 0) return obj;
  if (props.length === 1) return obj[props[0]];
  const [first, ...restProps] = props;
  const restObj = obj[first];
  return deepGet(restObj, ...restProps);
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}

console.log("deepSet");
const myObject2 = {};

const deepSet = (value, obj, ...props) => {
  if (props.length > 0) {
    const [first, ...restProps] = props;
    if (props.length === 1) {
      obj[first] = value;
    } else {
      if (obj.hasOwnProperty(first)) {
        const tmpObj = obj[first];
        deepSet(value, tmpObj, ...restProps);
      } else {
        const tmpObj = {};
        obj[first] = tmpObj;
        deepSet(value, tmpObj, ...restProps);
      }
    }
  }
};

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}

//---------------------------
console.log("\n-- FLATTEN ARRAY --");
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flattenArray = (inputArray) => {
  return inputArray.reduce((flattened, elem) => {
    if (Array.isArray(elem)) return flattened.concat(...flattenArray(elem));
    return flattened.concat(elem);
  }, []);
};

console.log("flattenArray ", flattenArray(sample));

// RETO: tipar función
type MultiArray<T> = Array<T | MultiArray<T>>;

const flattenArrayTyped = <T>(inputArray: MultiArray<T>): T[] => {
  return inputArray.reduce<T[]>((flattened: T[], elem: T): T[] => {
    if (Array.isArray(elem)) {
      return flattened.concat(...flattenArrayTyped(elem));
    }
    return flattened.concat(elem);
  }, []);
};

console.log("flattenArrayTyped ", flattenArrayTyped(sample));

const flattenArrayIterative = <T>(inputArray: MultiArray<T>): T[] => {
  const flattened = [];
  const stack = [...inputArray];

  while (stack.length) {
    const elem = stack.pop();

    if (Array.isArray(elem)) {
      stack.push(...elem);
    } else {
      flattened.unshift(elem);
    }
  }

  return flattened;
};

//---------------------------
console.log("\n-- MEMOIZATION --");

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

//Apartados A+B
const memoize =
  (f, result = null) =>
  () =>
    (result = result ? result : f());

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

//Apartado C
let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

type Arguments = Array<string | number | boolean>;
type MemoizedFunction<T extends (...args: Arguments) => string> = (
  ...args: Arguments
) => ReturnType<T>;

const memoizeArgs = (f: (...args: Arguments) => string) => {
  let mem = {};

  return (...args: Arguments): string => {
    const key: string = args.join("_");
    if (key in mem) {
      return mem[key];
    } else {
      return (mem[key] = f(...args));
    }
  };
};

const memoizedGreet: MemoizedFunction<typeof repeatText> =
  memoizeArgs(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2

//---------------------------
console.log("\n-- TREE --");
interface TreeNode<T> {
  value: T;
  children?: Array<TreeNode<T>>;
}

const testTree: TreeNode<string> = {
  value: "abuelo",
  children: [
    {
      value: "padre",
      children: [{ value: "hijo1" }, { value: "hijo2" }, { value: "hijo3" }],
    },
  ],
};

console.log(testTree);

//---------------------------
console.log("\n-- Comprendiendo JS --");
console.log("-- Cuestión 1 --");
//¿Existe alguna forma de que la expresión x === x de como resultado false?

const x1 = NaN;

console.log(x1 === x1); // false

console.log("-- Cuestión 2 --");
//Habiendo resuelto la Cuestión l, ¿como implementarías una función que compruebe si un determinado valor es NaN?

const isNaNValue = (v) => v !== v;

console.log(isNaNValue(NaN)); // true

console.log("-- Cuestión 3 --");
//Habiendo resuelto la Cuestion 2 ¿Existe alguna forma de que la expresión !isNaNValue(x) && x !== x de como resultado true?

console.log(!isNaNValue(x1) && x1 !== x1); // false

console.log("-- Cuestión 4 --");
//¿Podrías dar con alguna forma de que la expresión x + 1 === x - 1 arroje true?

const x2 = Infinity;

console.log(x2 + 1 === x2 - 1); // true

console.log("-- Cuestión 5 --");
//Se te ocurre alguna forma de hacer que la expresión x > x de como resultado true?

//const x3 = ¿?;

//console.log(x3 > x3); // true
