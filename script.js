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
// const number=[1,2,3,4,5];


// let cem=0;
// let sayi=0;
// let nsay=0;
// let hasil=1;
// for(let i=0;i<number.length;i++){
//   hasil=hasil*number[i];
//   nsay=nsay+1
//    console.log(sayi);
//    cem=cem+number[i];
   
//    let arayy2=new Array;
   
// if(number[i]%2==0){
//    arayy2.push(number[i]);
// };
// console.log(arayy2);
// }
// number[number.length]=[8,9,9]
// console.log(number);
// console.log(cem);
// console.log(nsay);

// console.log(number[number.length]=10);
// console.log(number.shift());
// console.log(number);






// //2
// //5
// const number1=[1,-5,-6,-10,5,8,20]
// let msay=0;
// let mcem=0;


// for(let j=0; j<number1.length;j++){
//    if(number1[j]>0){
//       mcem=mcem+number1[j];
//    }else{
//       msay++;
//    };

// }
// console.log(msay,mcem);

// const number3=[1,-2,4,-6,-7];
// let array6=new Array
// let cem=0;
// for(let k=0;k<number3.length;k++){
//    cem=cem+number3[k];
//    if(number3[k]>0){
//       array6.push(-number3[k]);
//    }else{
//       array6.push(-number3[k]);
//    };
// }
// console.log(array6);
// let midle=cem/number3.length;
// console.log(midle);
// let aray1=[2,4,5,7,8]
// let c=prompt("fgfhg")*1;
// function aray(a,b) {
//    a=aray1;
//    let sayi=0;
//    let aray2=new Array;
//    for (let i=0;i<aray1.length;i++){
//    sayi=sayi+1;
//    }
//    if(c==b){
//     aray2=aray1[0,aray1[b]];
//    }
//    return aray2;
// }
// console.log(aray(aray1,2));
let number3=[1,2,3,4]
let number4=[5,6,7,8]
function arayy(a,b) {
   a=number3;
   b=number4;
   let result=1;
   for (let i=0;i<a.length;i++){
      for(let j=0;j<b.length;j++){
        result=a[i]*b[j]++;
        
      };
   };
  return result;
}
console.log(arayy());

