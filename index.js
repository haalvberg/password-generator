const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let pwOne = document.getElementById("gp1")
let pwTwo = document.getElementById("gp2")
let generateButton = document.getElementById("gp-btn")

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



generateButton.addEventListener("click", function() {
    
    pwOne.textContent = " "
    pwTwo.textContent = " "
    
    for (let i = 0; i < slider.value; i++) {  
        let randomIndexOne = Math.floor( Math.random() * characters.length  )
        let randomIndexTwo = Math.floor( Math.random() * characters.length  )
        pwOne.textContent +=  characters[randomIndexOne]
        pwTwo.textContent +=  characters[randomIndexTwo]
    }
})

function copyTextOne() {
    navigator.clipboard.writeText
        (pwOne.textContent);
} function copyTextTwo() {
    navigator.clipboard.writeText
        (pwTwo.textContent);
}

