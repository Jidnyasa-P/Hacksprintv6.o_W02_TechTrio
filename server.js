const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Serves login.html and other static files

let users = [];

// Load existing users from JSON (if file exists)
const usersFilePath = path.join(__dirname, "users.json");
if (fs.existsSync(usersFilePath)) {
  users = JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
}

// Home route - redirect to login page
app.get("/", (req, res) => {
  res.redirect("/login.html");
});

// Serve dashboard with welcome message
app.get("/dashboard", (req, res) => {
  const username = req.query.user;
  if (!username) {
    return res.send("User not logged in. <a href='/login.html'>Login</a>");
  }
  res.send(`
    <h2>Welcome, ${username}!</h2>
    <a href="/login.html">Logout</a>
  `);
});

// Handle signup POST
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.send("User already exists. <a href='/login.html'>Login here</a>");
  }

  users.push({ email, password });
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.send("Signup successful! <a href='/login.html'>Login now</a>");
});

// Handle login POST
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Redirect to dashboard with user email in query
    res.redirect(`/dashboard?user=${encodeURIComponent(email)}`);
  } else {
    res.send("Invalid credentials. <a href='/login.html'>Try again</a>");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
