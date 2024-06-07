export default abstract class Upi {

    public constructor(private upiId:string, private providerName:string){};

    getUpiId():string{
        return this.upiId;
    }

    getProviderName():string{
        return this.providerName;
    }
}