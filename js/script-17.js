/*
500 ile 1000 arasında 7 ile ve 3 ile tam bölünebilen 
sayıların adedini ayrı ayrı bulan programı yazınız. 
*/
let sayac7 = 0;
let sayac3 = 0;
for(let i=500; i<=1000; i++){
  if(i % 7 === 0){
    sayac7++;
  }
  if(i % 3 === 0){
    sayac3++;
  }
}
console.log(sayac3, sayac7);
