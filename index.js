function isPalindrome(word) {
  // Write your algorithm here

  const charArray = word.split('')
  for(let i =0; i<= charArray.length-1; i++){
   
    if(charArray[i] == charArray[(charArray.length-1) -i]){
      return true
    }else{
      return false
    }
  }


}

/* write a function isPalindrome that takes a string argument
check if string is palindrome, meaning is characters are the same from start to end:

  Add your pseudocode here
*/

/*
1. convert string to a charcter array
2. iterate over each character 
3. check if index i = index length-i 
4. if the characters match? return true else return false
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
