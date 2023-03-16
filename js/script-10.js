/* Kullanıcının girdiği email ve şifre bilgisinin doğru olup 
olmadığını kontrol edip mesaj veren programı yapınız
*/
const dogruEposta = "ali@gel.com";
const dogruSifre = "12345";
const gelenEposta = prompt("Epostanızı giriniz");
const gelenSifre = prompt("Şifrenizi giriniz.");
if(gelenEposta === dogruEposta && gelenSifre === dogruSifre){
    alert("Giriş yapıldı");
}
else{
    alert("Hatalı email veya şifre");
}
