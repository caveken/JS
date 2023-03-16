/*
Doğum yılı girilen kişinin ehliyet alıp alamayacağını, 
alamayacak ise kaç yıl sonra alabileceğini gösteren programı yapınız
*/

const yil=Number(prompt("doğum yılınız: "));
const tarihSaat=new Date;
const yas=tarihSaat.getFullYear()-yil;

if (yas>=18){
    alert("ehliyet alma hakkına sahipsiniz")
}
else{
    const kalanYil=18-yas;
    alert(kalanYil+ " sonra ehliyet alabilirsiniz")
}
