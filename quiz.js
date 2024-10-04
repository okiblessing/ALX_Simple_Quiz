
function checkAnswer() {
    var correctAnswer = "4"; 

    
    var userAnswer = document.querySelector('input[name="quiz"]:checked'); 

    // Check if an answer was selected
    if (userAnswer) {
        var answerValue = userAnswer.value; 
        gi
        var feedbackElement = document.getElementById("feedback"); // Get the feedback element
        if (answerValue === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done."; // Update feedback for correct answer
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!"; // Update feedback for incorrect answer
        }
    } else {
        alert("Please select an answer!"); // Alert if no answer is selected
    }
}

// Add an Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer); // Attach click event to the button
