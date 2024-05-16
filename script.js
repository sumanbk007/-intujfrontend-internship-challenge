document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const button = question.querySelector(".toggle-answer");
    const answer = question.querySelector(".answer");

    button.addEventListener("click", function () {
      const isExpanded = button.textContent === "-";
      button.textContent = isExpanded ? "+" : "-";
      answer.style.display = isExpanded ? "none" : "block";

      // Close other answers
      questions.forEach((q) => {
        if (q !== question) {
          const otherButton = q.querySelector(".toggle-answer");
          const otherAnswer = q.querySelector(".answer");
          otherButton.textContent = "+";
          otherAnswer.style.display = "none";
        }
      });
    });

    // Show first answer by default
    if (question.id === "question1") {
      button.click();
    }
  });
});
