const crypto = require("crypto");

// Generate a random string on startup
const randomString = crypto.randomBytes(16).toString("hex");

console.log("Application started. Random string generated:", randomString);

// Function to log the random string with a timestamp
function logRandomString() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Random String: ${randomString}`);
}

// Output the random string every 5 seconds
setInterval(logRandomString, 5000);
