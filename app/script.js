const elementInput = document.getElementById("text-input");
const buttonInput = document.getElementById("check-btn");

const printInput = (e) => {
  // e.preventDefault()
  const userInput = elementInput.value;

  checkPalindrome(userInput)
};

// implementar regex para tirar espaços e simbolos 
const checkPalindrome = (word) => {

  const regex = /[\W\d\s]+/gi;
  const str = word.replace(regex, "");
  const wordInverter = str.split("").reverse().join("");
  const result = document.getElementById("result");

  console.log(str);
  console.log(str.length);

  if (str === "") {
    alert("Type anything first")
    return
  }

  if (str === wordInverter && str.split("").length > 1) {
    result.innerText = `${str} Is a palindrome`
    return console.log(`<p>${`${str} Is a palindrome`}</p>`)
  };

  result.innerText = `${str} Is not a palindrome`;
  return console.log(`${str} Is not a palindrome`)
};

buttonInput.addEventListener("click", (event) => {
  event.preventDefault();
  printInput();
  elementInput.innerText = "";
  elementInput.value ="";
})
