const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const body = document.querySelector("body")



let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0

document.querySelector(".score").textContent = score




checkBtn.addEventListener("click", function(){
    const inputNumber =Number(document.querySelector(".guess").value);
   
    
    
    if(!inputNumber){
        document.querySelector(".message").textContent = "⛔ No number !"
    }

    else if(inputNumber > randomNumber){

        if(score < 1){
           document.querySelector(".message").textContent = "Sorry you have lost the game." 
             body.style.backgroundColor = "red";  
        }

        else{
        document.querySelector(".message").textContent = "📈 Too high";
        score--;
         document.querySelector(".score").textContent = score;
        } 
    }


    
     else if(inputNumber < randomNumber){
          if(score < 1){
           document.querySelector(".message").textContent = "😢 Sorry you have lost the game."
              body.style.backgroundColor = "red";  
        }

        else{
        document.querySelector(".message").textContent = "📈 Too low";
        score--;
         document.querySelector(".score").textContent = score;
        } 
    }

    else if(randomNumber = inputNumber){
      document.querySelector(".message").textContent = " 🎉 Correct Answer";
      document.querySelector(".number").textContent = randomNumber;
      body.style.backgroundColor = "purple";
      document.querySelector('.number').style.width = '25rem';

      //IMPLEMENTING HIGH SCORES

       if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    };

    
})

againBtn.addEventListener("click", function(){
score = 20
document.querySelector(".score").textContent = score;
 let randomNumber = Math.trunc(Math.random() * 20) + 1;
body.style.backgroundColor = "#222";
document.querySelector(".message").textContent = "Start guessing...";
document.querySelector(".guess").value = ""
 document.querySelector('.number').style.width = '15rem';
   document.querySelector('.number').textContent = '?';
})
