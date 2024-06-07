function isPallindrom(name:String):boolean{
    let i=0;
    let j=name.length-1;
    while(i<j){
        if(name.charAt(i)!=name.charAt(j)){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
let res=isPallindrom("madam")
console.log(res);
