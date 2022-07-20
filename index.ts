console.log("Hello TypeScript");
// const test: string = null;

interface IDescription {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj2: IDescription = {
  name: 'test',
  age: 599,
  male: true,
  // 无需实现 func 也是合法的
};

obj2.func = () => {};
obj2.func();
console.log('debug ~ file: index.ts ~ line 20 ~ obj2.func()', typeof obj2.func);


const res = obj2.male;
const func: Function = () => {};
function sayHi() {
  return 1;
}
console.log('debug ~ file: index.ts ~ line 25 ~ func', func, typeof func);
