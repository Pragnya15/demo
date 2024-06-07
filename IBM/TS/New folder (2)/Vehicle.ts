enum COLOR{
    Red="Red",
    Black="Black"
}
type FuelType = string
class Vehicle{
    color:COLOR;
    fuelType:FuelType
    
    
    public constructor(color:COLOR,  fuelType:FuelType ){
        this.color=color;
        this.fuelType=fuelType;
    }
    public getColor():COLOR{
        return this.color;
    }
    public getFuelType():FuelType{
        return this.fuelType;
    }

    public toString():string{
        return this.color+" "+this.fuelType;
    }
    
}

// let n:COLOR=COLOR.Red;
    let vehicle = new Vehicle(COLOR.Red,"petrol");
    // console.log(vehicle.getColor());
    console.log(vehicle);
    