function cipherCode(){
    let userString = document.getElementById("userMessage").value;
    let encode = document.getElementById("encode");
    let cipherKey = document.getElementById("cipherKey").value;
    let cleanString = (userString.trim()).toLowerCase();
    let outputMessage = [];
    let flag = true;
  
    if (encode.checked) {
      flag = true;
    } else{
    flag = false;
    }
    for (let i = 0; i < cleanString.length; i++){
      outputMessage.push(codeLetter(cleanString[i], cipherKey, flag));
    }
  
    document.getElementById("output").value = outputMessage.join("");
  }
  
  
  function convertIndexToLetter(index){
    let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];
    let letter = alphabet[index];
    return letter;
  }
  
  function convertLetterToIndex(letter){
    let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];
    index = alphabet.indexOf(letter);
    return index;
  }
  
  function calculateNewIndex(letter, cipherKey, encode){
    let index = Number(convertLetterToIndex(letter));
  
    if (encode) { 
      index = index + Number(cipherKey); 
    } else {
      index = index - Number(cipherKey);
    }  
    
    if (index > 25){
      index = index - 26;
    } else if (index < 0) {
      index = index + 26;
    }
    return index;
  }
  
  function codeLetter(letter, cipherKey, flag){
    let letterRegEx = /[^a-z]/;
    
    if (letterRegEx.test(letter)){
      return letter;
    } else {
      let newIndex = calculateNewIndex(letter, cipherKey, flag);
      let codedLetter = convertIndexToLetter(newIndex);
      return codedLetter;
    }
  };