class Gen<T>{

    private value:T

    constructor(private name:string){}
    public setValue(val:T){
        this.value=val;
    }

    public getValue():T{
        return this.value;
    }

}
let g = new Gen<number>('myNumber');
g.setValue(10);
console.log(g)


