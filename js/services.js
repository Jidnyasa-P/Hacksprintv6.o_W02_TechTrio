document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const servicesList = document.getElementById("servicesList");
    let servicesData = [];
  
    // Load services from JSON
    fetch("data/services.json")
      .then(res => res.json())
      .then(data => {
        servicesData = data;
        renderServices("all");
      })
      .catch(err => {
        servicesList.innerHTML = "<p>Failed to load services.</p>";
        console.error("Error loading services:", err);
      });
  
    // Handle filtering
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
  
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        renderServices(filter);
      });
    });
  
    function renderServices(filter) {
      servicesList.innerHTML = "";
  
      const filtered = filter === "all"
        ? servicesData
        : servicesData.filter(service => service.category === filter);
  
      if (filtered.length === 0) {
        servicesList.innerHTML = "<p>No services found.</p>";
        return;
      }
  
      filtered.forEach(service => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.setAttribute("data-category", service.category);
        card.innerHTML = `
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        `;
        servicesList.appendChild(card);
      });
    }
  });
  