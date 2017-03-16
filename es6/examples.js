// let x = 2;
// const r1 = x++ + x++;
// const r2 = ++x + ++x;
// const r3 = x++ + ++x;
// const r4 = ++x + x++;
// let y = 10;
// const r5 = y-- + y--;
// const r6 = --y + --y;
// const r7 = y-- + --y;
// const r8 = --y + y--;

// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log(r5);
// console.log(r6);
// console.log(r7);
// console.log(r8);


const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };
Object.keys(o)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop}: ${o[prop]}`));
