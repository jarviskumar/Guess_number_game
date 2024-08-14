let randomNum = Math.floor(Math.random() *100)+1;
      const leftChance = document.getElementById("leftChance");
      const lastGuess = document.getElementById("lastGuess")
      const lastResult = document.getElementById("lastResult")
      const HiLow = document.getElementById("HiLow")
      const inpNum = document.getElementById("inpNum")
      const buttonSubmit = document.getElementById("submit");
      let tenNum = document.getElementById("ten").textContent;
      tenNum = Number.parseInt(tenNum)
      let chances = 1
      function GuessCheck(){
        const userGuess = Number(inpNum.value)
        
        if (chances === 1){
          lastGuess.textContent = "Previous Guesses: "
    
        }
       lastGuess.textContent += userGuess + ", "
       
       if (userGuess === randomNum){
         lastResult.textContent = `Congratulation! You got it right in ${chances} chances`;
         lastResult.style.backgroundColor = "#09cf09"
         HiLow.textContent = " ";
         GameOver();
       }
       else if (chances == 10){
         lastResult.textContent = "!!!Game Over!!!"
         lastResult.style.backgroundColor = "#16a6fd46";
         GameOver();
       }
       else{
         lastResult.textContent= "Wrong Guess... Try again"
         lastResult.style.backgroundColor = '#fc3a3a';
         if(userGuess<randomNum){
           HiLow.textContent = "Your guess was too small";
         }
         else{
           HiLow.textContent = "Your guess was too large";
         }
       }
       tenNum = tenNum-1
       ten.textContent= tenNum
       chances++;
       inpNum.value = "";
      }

     function GameOver(){
       inpNum.disabled = true;
       //buttonSubmit.disabled = true;
       buttonSubmit.disabled = true
       }