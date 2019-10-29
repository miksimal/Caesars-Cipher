function rot13(str) {
  let decoded = "";
  
  for (var i = 0; i < str.length; i++) {
    
    let ascii = str.charCodeAt(i);
    
    if (ascii >= 65 && ascii <=90) {  // check it's an uppercase alphabetic character
    
      if ((ascii - 13) < 65) {
      
        ascii += 13;
        
      } else ascii -= 13;
    }  // note that if it's non-alphabetic, it just gets passed on as is
      
      decoded += String.fromCharCode(ascii);
  };
  
  return decoded;
}

//  Tests:
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
