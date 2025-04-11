document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("chatbotToggle");
  const bot = document.getElementById("chatbot");
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const messages = document.getElementById("chatMessages");

  // Toggle chatbot visibility
  toggle.addEventListener("click", () => {
    bot.style.display = bot.style.display === "flex" ? "none" : "flex";
  });

  // Send message on click or Enter key
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    appendMessage("You", text);
    input.value = "";

    // Simulated bot reply after delay
    setTimeout(() => {
      appendMessage("Bot", getBotReply(text));
    }, 500);
  }

  function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add("chat-message");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function getBotReply(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi"))
      return "Hi there! How can I help you?";

    if (input.includes("book"))
      return "You can book services on our 'Book Now' page.";

    if (input.includes("groom"))
      return "We offer grooming, bathing, and nail trimming services.";

    if (input.includes("contact"))
      return "You can reach us at support@petcareconnect.com or visit the Contact page.";

    if (input.includes("location"))
      return "We currently serve areas within Pune city.";

    if (input.includes("booking"))
      return "You can book a service from the booking page.";

    if (input.includes("services"))
      return "We offer dog walking, grooming, and boarding services.";

    if (input.includes("bye"))
      return "Goodbye! Have a pawsome day!";

    if (input.includes("help"))
      return "Sure! You can ask about our services, booking process, or contact information.";

    if (input.includes("thank you") || input.includes("thanks"))
      return "You're welcome! Let me know if you need anything else. 🐾";

    return "Sorry, I didn’t understand that. Try asking about services, booking, or contact info.";
  }
});

