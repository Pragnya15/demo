let a=5;
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
const person:{fname:string, model:string}={
    fname:"hello",
    model:"yeh78"
}
console.log(person)

const names:string[]=[]
names.push("abc")
names.push("def")

console.log(names)

// let tuppleval: readonly[number,string];

// tuppleval=[1,"the"]
// tuppleval=[2,"res"]
// //console.log(tuppleval)
// tuppleval.push("hello")
// console.log(tuppleval)

enum GENDER{
    m="Male",
    f="Female"
}
let gender:GENDER=GENDER.f;
console.log(gender)



