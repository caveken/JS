//Alttaki gibi yıldızlardan oluşan matrisi oluşturan programı yazınız.
/*
*
 *
  *
   *
    *
     *
 */
let star = "";
for (let r = 1; r <= 6; r++) {
  for (let c = 1; c <= r; c++) {
    if(r===c){
      star = star + "*";
    }
    else{
      star = star + " ";
    }
    
  }
  star = star + "\n";
}
console.log(star);
