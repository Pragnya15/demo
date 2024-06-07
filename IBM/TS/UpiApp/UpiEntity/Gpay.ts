import { UpiAppOpps } from "../UpiOps/UpiAppOps";
import  Upi  from "./UpiAbstract";

export class Gpay extends Upi implements UpiAppOpps{

    public constructor(private cashBankAmount:number, upiId:string, providerName:string)
    {
        super(upiId,providerName);
    }

    public addMoney(amount: number): void {
        console.log("Add Money "+amount);
    }
    public withdrawMoney(amount: number): number {
        console.log("Withdraw money "+amount);
        return amount;
    }
    public getCashBackAmount():number{

        return this.cashBankAmount;
    }


    public setCashBankAmount(cashBankAmount:number):void{

        this.cashBankAmount=cashBankAmount;
    }
}
