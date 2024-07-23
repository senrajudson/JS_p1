const elementInput = document.getElementById("text-input");
const buttonInput = document.getElementById("check-btn");

const printInput = (e) => {
  // e.preventDefault()
  const userInput = elementInput.value;

  checkPalindrome(userInput)
};

// implementar regex para tirar espaços e simbolos 
const checkPalindrome = (word) => {

  const regex = /[\W\s/_/./,/]+/gi;
  const str = word.replace(regex, "").toLowerCase();
  const wordInverter = str.split("").reverse().join("").toLowerCase();
  const result = document.getElementById("result");

  console.log(wordInverter);
  console.log(str);
  console.log(str.length);

  if (str === "") {
    alert("Please input a value")
    return
  }

  if (str === wordInverter) {
    result.innerText = `${word} is a palindrome`
    return console.log(`<p>${`${word} is a palindrome`}</p>`)
  };

  result.innerText = `${word} is not a palindrome`;
  return console.log(`${word} is not a palindrome`)
};

buttonInput.addEventListener("click", (event) => {
  event.preventDefault();
  printInput();
  elementInput.innerText = "";
  elementInput.value ="";
})

"1 eye for of 1 eye"
"My age is 0, 0 si ega ym"