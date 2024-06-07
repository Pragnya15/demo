import BankOps from "./bankops";

interface CurrentAccountOps extends BankOps{
    overdraft(amount:number):void;
}
class CurrentAccount implements CurrentAccountOps{
    overdraft(amount: number):void {
        console.log("Overdraft amount "+amount);
    }
    deposit(amount: number) {
        console.log("Depositing amount "+amount);
    }
    withdraw(amount: number) {
        console.log("Withdrawing amount "+amount);
    }
    
}
class SavingsBank implements BankOps{
    deposit(amount: number) {
        console.log("Depositing amount "+amount);
    }
    withdraw(amount: number) {
        console.log("Withdrawing amount "+amount);
    }
    
}
let bnk:SavingsBank=new SavingsBank();
bnk.deposit(2000);
bnk.withdraw(1000);

let cnt:CurrentAccount=new CurrentAccount();
cnt.overdraft(1500);
