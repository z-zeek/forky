document.addEventListener("DOMContentLoaded", () => {
  // Initialize Feature Engagement Chart
  const featureCtx = document.getElementById("featureEngagementChart").getContext("2d");
  const featureEngagementData = {
    labels: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
    datasets: [
      {
        label: "Engagement Count",
        data: [15, 20, 10, 5, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const featureEngagementChart = new Chart(featureCtx, {
    type: "bar",
    data: featureEngagementData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Initialize Feedback Trends Chart
  const feedbackCtx = document.getElementById("feedbackTrendsChart").getContext("2d");
  const feedbackTrendsData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Feedback Count",
        data: [30, 20, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const feedbackTrendsChart = new Chart(feedbackCtx, {
    type: "doughnut",
    data: feedbackTrendsData
  });

  // Filter Data Functionality
  document.getElementById("filter-data").addEventListener("click", () => {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    // Example filtering logic (mocked)
    console.log(`Filtering data from ${startDate} to ${endDate}`);
    alert(`Filtered data from ${startDate} to ${endDate}.`);
    
    // Here, you'd fetch or calculate filtered data for your charts.
    // For now, we're just mocking this behavior.
  });
});
