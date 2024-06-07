export class Gen{
 SumGenerics<S,T>(a:S,b:T):[S,T]{
    return [a,b];
} 

//console.log(SumGenerics<string,number>("abc",23));
}