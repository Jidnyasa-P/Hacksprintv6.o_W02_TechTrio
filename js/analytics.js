// analytics.js - Basic analytics and insights handling for dashboard.html

document.addEventListener("DOMContentLoaded", () => {
    // Dummy data for analytics visualization
    const serviceData = {
      DogWalking: 34,
      Grooming: 21,
      Boarding: 15
    };
  
    const labels = Object.keys(serviceData);
    const dataPoints = Object.values(serviceData);
  
    const canvas = document.getElementById("analyticsChart");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [{
            label: "Bookings per Service",
            data: dataPoints,
            backgroundColor: ["#3b82f6", "#60a5fa", "#93c5fd"],
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 5
              }
            }
          }
        }
      });
    }
  });
  