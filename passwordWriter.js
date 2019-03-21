

function crypt(input, key) {
  // make shure is a string .. it is anyway
  const str = input.toString();
  // if the key is not divisible / 2 ..something
  let alp = "";
  const secretKey = noDupString(key);
  if (secretKey.length % 2 === 0) {
    alp += secretKey;
    alp +=
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?@%+/'!#$?:.(){}[]-_";
  } else {
    alp += secretKey.substring(1, secretKey.length);
    alp +=
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?@%+/'!#$?:.(){}[]-_";
  }
  //add the special char " " to make a super secret set
  const secretSet = " " + noDupString(alp);

  // all in arr to loop and search and super crypting all
  const alphabetArr = secretSet.split("");
  let n = alphabetArr.length / 2;
  const checkRightIndex = i => {
    let startIndex = 0;
    if (i < n) {
      startIndex = i + n;
    } else {
      startIndex = i - n;
    }
    return startIndex;
  };
  const findIndexFromChar = c => {
    for (let i = 0; i < alphabetArr.length; i++) {
      if (c === alphabetArr[i]) {
        return i;
      }
    }
    return alphabetArr.length;
  };
  let theResult = "";
  for (let i = 0; i < str.length; i++) {
    theResult += alphabetArr[checkRightIndex(findIndexFromChar(str.charAt(i)))];
  }
  console.log(theResult);
  return theResult;
}

//
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) || //if the object has no keys is empty
  (typeof value === "string" && value.trim().length === 0); //if empty string
// basically the function returns false if does not meet any of those prerequisites.

// returns a string without duplicates
const noDupString = string => {
  //reduce arg to string without duplicates
  const myString = string.split(" ").join("");
  let set = "";

  //storing the found chars
  let alreadyFound = {};

  // looping throught myString
  myString.split("").forEach(char => {
    //if no prop named as the char
    if (!alreadyFound[char]) {
      //update alreadyfound
      alreadyFound[char] = 1;
      //and concatenate the result
      set += char;
    }
  });

  return set;
};
///##################################################################################
// skip the keylogger 
 function write(e){
	let keyPressed = e.key;
	// take off some keys from the crypting
	const kc = e.keyCode;
	console.log(kc);
// if keycode is of commands not to  print write nothing
	if(kc === 8 || kc === 16 ){
		// na figata!!
	}else{
 	// write the letter but replace
 	const string = "qwertzuiopü+asdfghjklöä#yxcvbnm^1234567890ß´`°!/()=QWERTZUIOPÜASDFGHJKLÖYXCVBNM".split("");
 	const cryptstr = "ertYXCVBNM457890ß´zuioqw23pü+asdfghQWUIOPÜjklöä#yxcvbnmERTZ^16`°!/()=ASDFGHJKLÖ"
 	// see where the focus writing is and replace all
 	const focus = document.activeElement;
 	console.log(focus);
 		if(focus.value === ""){
 			// nada
 		}else{
 			// store the value of the field already there in array
 			let value = focus.value.split("");
 			value.pop();
	 		// get the last key pressed, crypt it and add
	 		const cryptedChar = crypt(keyPressed,"l2056sbfzent#qyp4");
	 		const result = value.join("");
	 		focus.value = result + cryptedChar;
	 	}
	}
 }
window.addEventListener("keyup", write, true);
