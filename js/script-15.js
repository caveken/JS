/*
Girilen 10 sayının ortalamasını bulan programı yapınız.
*/

var toplam=0;
for (let i=1;i<=10;i++){
    const sayi=Number(prompt(i+". sayi girin: "));
    toplam+=sayi;
}
alert("sayilarin ortalamasi: "+toplam/10)