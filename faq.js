document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");
  
    faqQuestions.forEach(question => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
  
        // Toggle open class
        question.classList.toggle("open");
  
        // Add smooth animation
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });
  