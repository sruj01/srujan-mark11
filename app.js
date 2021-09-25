const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector(".output-box");

function compareValues(sum, luckyNumber)
{
  if (sum % luckyNumber === 0){
    outputBox.innerText = "Congratulations! Your Birthday is Lucky🥳";
  }
  else{
    outputBox.innerText = "UhOh! Your Birthday is NOT Lucky ☹️";
  }
}

function checkBirthDateIsLucky(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(luckyNumber.value && dob){
    compareValues(sum, luckyNumber.value)
  }
  else{
    outputBox.innerText = "Please Fill Both the Fields";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-","");
  let sum = 0;
  for (let i = 0; i < dob.length; i++){
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
