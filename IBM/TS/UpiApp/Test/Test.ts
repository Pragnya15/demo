import { Gpay } from "../UpiEntity/Gpay";
import { PhonePay } from "../UpiEntity/PhonePay";
let gpay:Gpay= new Gpay(1000,"12","abc");
let phonepay:PhonePay= new PhonePay(2000,"24","def");
// console.log(gpay.getCashBackAmount());
console.log(gpay);
// console.log(phonepay.getCashBackAmount());
console.log(phonepay);