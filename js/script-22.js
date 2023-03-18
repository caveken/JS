//Alttaki gibi yıldızlardan oluşan matrisi oluşturan programı yazınız.
/*
1
12
1*3
1234
1*3*5
123456
1*3*5*7
12345678
1*3*5*7*9
 */
let star = "";
for (let r = 1; r <= 9; r++) {
  for (let c = 1; c <= r; c++) {
    if(r%2 !== 0 && c%2===0){
      star = star + "*";
    }
    else{
      star = star + c;
    }    
  }
  star = star + "\n";
}
console.log(star);
Collapse