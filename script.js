//example 1
let letter=prompt("herfi daxil et");
function yoxlama(letter1) {
    let sait=["a","e","i","o","u"];
    let netice;
    for (let i = 0; i < sait.length; i++) {
        if(letter=sait[i]){
         netice="saitdi";
        }else{
            netice="sait deyil";
        }
        return netice;
    }

}
console.log(yoxlama());
//example3
let giris=prompt("giris balini daxol edin")*1;
let imtahan=prompt("imtahan bali")*1;
function hesablama(a,b) {
    let result;
    if (imtahan>=17){
        let umumi=imtahan+giris;
        if(51<=umumi && umumi<=60){
            result="E";
        }else if(61<=umumi && umumi<=70){
            result="D";
        }else if(71<=umumi && umumi<=80){
            result="C";
        }else if(81<=umumi && umumi<=90){
            result="B";
        }else{
            result="C";
        }
    }
    else{
        result="imtahan kesilib"
    }
    return result;
}
console.log(hesablama());
//example2
let eded1=prompt("eded1")*1;
let eded2=prompt("eded2")*1;
let operator=prompt("operator");
function calc(a,b,c) {
    let netice1;
    if(operator=="+"){
      netice1=eded1+eded2;
    }else if(operator=="-"){
        netice1=eded1-eded2;
    }else if(operator="*"){
        netice1=eded1-eded2;
    }else{
        if(eded2==0){
          netice1="sifir";
        }else{
            netice1=eded1/eded2;
        }
    }
    return netice1;
    
}
console.log(calc(eded1,eded2,operator));