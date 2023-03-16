/*
Boy ve kilo değerlerini alıp vücut kitle endeksini bulup, 
ideal aralık (18.5-25) dışındaki değerler için «ideal kilo değil», 
ideal aralıkta ise «ideal kilo» mesajı veren programı yazınız 
*/

const boy=Number(prompt("boyunuzu giriniz (cm): "));
const kilo=Number(prompt("kilonuzu giriniz (kg): "));

const vki=(kilo/(boy/100)**2).toFixed(2);

if(vki<=25 && vki>=18.5){
    alert("ideal kilodasınız "+vki+" kg");
}
else{
    alert("kilonuz için tedbir almalısınız ")
}