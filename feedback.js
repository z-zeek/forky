document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackItems = document.getElementById("feedback-items");
    const filterSentiment = document.getElementById("filter-sentiment");
  
    let feedbackList = []; // To store feedback dynamically
  
    // Function to render feedback
    function renderFeedback(filter = "All") {
      feedbackItems.innerHTML = ""; // Clear existing feedback
  
      const filteredFeedback = feedbackList.filter(feedback => {
        return filter === "All" || feedback.sentiment === filter;
      });
  
      filteredFeedback.forEach((feedback, index) => {
        const feedbackItem = document.createElement("li");
        feedbackItem.innerHTML = `
          <h3>Feature ID: ${feedback.featureId}</h3>
          <p>${feedback.comment}</p>
          <p><strong>Sentiment:</strong> ${feedback.sentiment}</p>
          <button data-index="${index}" class="delete-btn">Delete</button>
        `;
        feedbackItems.appendChild(feedbackItem);
      });
  
      // Add delete functionality
      document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", (e) => {
          const index = e.target.dataset.index;
          feedbackList.splice(index, 1); // Remove feedback
          renderFeedback(filterSentiment.value); // Re-render list
        });
      });
    }
  
    // Handle form submission
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const featureId = document.getElementById("feature-id").value;
      const comment = document.getElementById("feedback-comment").value;
      const sentiment = document.getElementById("feedback-sentiment").value;
  
      // Add feedback to list
      feedbackList.push({ featureId, comment, sentiment });
  
      // Render updated feedback list
      renderFeedback(filterSentiment.value);
  
      // Reset the form
      feedbackForm.reset();
    });
  
    // Handle filtering
    filterSentiment.addEventListener("change", (e) => {
      renderFeedback(e.target.value);
    });
  
    // Initial rendering
    renderFeedback();
  });
  