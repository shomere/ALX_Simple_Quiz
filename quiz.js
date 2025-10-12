function checkAnswer(){
    const correctAnswer = 4;
    
    const selectedOption = document.querySelector('input [name="quiz"]:checker');
    const feedback = document.getElementById("feedback");

    if (!selectedOption){
        feedback.textContent = "Please select an answer  before submitting";
        feedback.style.color = "#dc3545";
        return;
    };

    const userAnswer = selectedOption.value

    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done."
        feedback.style.color = "#28a745";
    }else{
        feedback.textContent = "That's incorrect. Try again."
        feedback.style.color = "#dc3545";
    }


const submitButton = document.getElementById("submit-answer")
submitButton.addEventListener("click", checkAnswer);

};