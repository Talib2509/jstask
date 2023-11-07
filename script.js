// //example 1
// let letter=prompt("herfi daxil et");
// function yoxlama(letter1) {
//     let sait=["a","e","i","o","u"];
//     let netice;
//     for (let i = 0; i < sait.length; i++) {
//         if(letter=sait[i]){
//          netice="saitdi";
//         }else{
//             netice="sait deyil";
//         }
//         return netice;
//     }

// }
// console.log(yoxlama());
// //example3
// let giris=prompt("giris balini daxol edin")*1;
// let imtahan=prompt("imtahan bali")*1;
// function hesablama(a,b) {
//     let result;
//     if (imtahan>=17){
//         let umumi=imtahan+giris;
//         if(51<=umumi && umumi<=60){
//             result="E";
//         }else if(61<=umumi && umumi<=70){
//             result="D";
//         }else if(71<=umumi && umumi<=80){
//             result="C";
//         }else if(81<=umumi && umumi<=90){
//             result="B";
//         }else{
//             result="C";
//         }
//     }
//     else{
//         result="imtahan kesilib"
//     }
//     return result;
// }
// console.log(hesablama());
// //example2
// let eded1=prompt("eded1")*1;
// let eded2=prompt("eded2")*1;
// let operator=prompt("operator");
// function calc(a,b,c) {
//     let netice1;
//     if(operator=="+"){
//       netice1=eded1+eded2;
//     }else if(operator=="-"){
//         netice1=eded1-eded2;
//     }else if(operator="*"){
//         netice1=eded1-eded2;
//     }else{
//         if(eded2==0){
//           netice1="sifir";
//         }else{
//             netice1=eded1/eded2;
//         }
//     }
//     return netice1;
    
// }
// console.log(calc(eded1,eded2,operator));

//aray
const number=[1,2,3,4,5];

number[number.length]=[8,9,9]
console.log(number);
let cem=0;
let sayi=0;
let nsay=0;
for(let i=0;i<number.length;i++){
  
  nsay=nsay+1
   console.log(sayi);
   cem=cem+number[i];
   console.log(cem);
   let arayy2=new Array;
   
if(number[i]%2==0){
   arayy2.push(number[i]);
};
console.log(arayy2);
}
console.log(nsay);

console.log(number[number.length]=10);
console.log(number.shift());
console.log(number);






//2
//5
const number1=[1,-5,-6,-10,5,8,20]
let msay=0;
let mcem=0;

for(let j=0; j<number1.length;j++){
   if(number1[j]>0){
      mcem=mcem+number1[j];
   }else{
      msay++;
   };

}
console.log(msay,mcem);

