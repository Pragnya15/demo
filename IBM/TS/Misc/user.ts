class User {
  constructor(private name: string, private age: number) {}

  @logger
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  @logger
  printAge() {
    console.log(`I am ${this.age} years old`);
  }
}

const user = new User("Ron", 25);
user.greet();
user.printAge();
  function logger(originalMethod: any, _context: any) {
    function replacementMethod(this: any, ...args: any[]) {
      console.log("start:", originalMethod.name);
      const result = originalMethod.call(this, ...args);
      console.log("end:", originalMethod.name);
      return result;
    }
  
    return replacementMethod;
  }
  

