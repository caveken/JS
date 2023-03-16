/*
kullanicinin girdiği isim karakter sayisi 2 ile 50 arasinda ise 
 merhaba yazar degil ise hata mesaji verir */

 const isim= prompt("bir isim giriniz");
 if (isim.length>=2 && isim.length<=50){
    alert("merhaba "+isim);
 }
 else{
    alert("lütfen gecerli bir isim giriniz");
 } 