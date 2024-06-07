import { PipeTransform ,Pipe} from "@angular/core";

@Pipe({
    standalone: true,
    name:'kg'
})
export class Kilogram implements PipeTransform{
    transform(kg:number):string {
       return kg/1000+" kg";
    }


    
}

