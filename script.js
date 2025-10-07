let numstring = "";

const display = document.querySelector("#screen");
display.textContent = numstring;

clear.addEventListener("click", () =>{
    display.textContent = " ";
})

function buildString(buttonNum){
    numstring = numstring +buttonNum;
    display.textContent = numstring;
    
}

num1.addEventListener("click", ()=>{
    numstring = numstring + "1";
    display.textContent = numstring;
})

num2.addEventListener("click", ()=>{
    numstring = numstring + "2";
    display.textContent = numstring;
})

let number1 = 0;
let number2 = 0;
let total = 0;

plus.addEventListener("click", ()=>{
   number1 = Number(numstring);
   numstring = "";
   display.textContent = numstring;
})

equals.addEventListener("click", ()=>{
    number2 = Number(numstring);
    total = number1 + number2;
    display.textContent = total;

})



const buttons = document.querySelectorAll("#number_btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    numstring = numstring + value;
  });
});
