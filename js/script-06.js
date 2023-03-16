/*
 Javascript te === veya !== ifadelerinde hem değer hem tip kontrolü yapılır
 == veya != ifadelerinde ise sadece değer kontrolü yapılır.
 "0" !== 0   => true
 "0" != 0    => false
 "0" === 0   => false
 "0" == 0    => true
*/
const sayi1 = Number(prompt("1.sayıyı giriniz"));
const sayi2 = Number(prompt("2.sayıyı giriniz"));
const sayi3 = Number(prompt("3.sayıyı giriniz"));
const ort = (sayi1 + sayi2 + sayi3) / 3;
if(ort>sayi1){
    alert("Kâr");
}
else{
    alert("Zarar");
}
if(sayi!=0){
    const sonuc = 50/sayi;
    alert("Sonuç:" + sonuc);
}
