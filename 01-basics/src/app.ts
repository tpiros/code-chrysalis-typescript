// which one is valid?

const message = 1;
message.toLowerCase();
// message();

// tsc src/app.ts to see output

export async function add(n: number, m: number) {
  return n + m;
}

export function sayHiPromise(name: string) {
  return new Promise((resolve) => {
    resolve('Hello ' + name + '!');
  });
}

(async () => {
  const welcome = await sayHiPromise('John');
  const number = add(5, 4);
  console.log(welcome, number);
})();

// create tsconfig.json
