export namespace Upiname{
export interface UpiAppOpps{
    
    addMoney(amount:number):void
    withdrawMoney(amount:number):number

}
export abstract class Upi {

    public constructor(private upiId:string, private providerName:string){};

    getUpiId():string{
        return this.upiId;
    }

    getProviderName():string{
        return this.providerName;
    }
}
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
}