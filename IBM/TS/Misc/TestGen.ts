import { Gen } from "./Generics";

let g=new Gen();
let res=g.SumGenerics<string,number>("abc",23);
console.log(res)

let g1=new Gen();
let res1=g.SumGenerics<boolean,number>(true,23);
console.log(res1)


