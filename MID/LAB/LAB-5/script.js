// Select the form and the output div
const form = document.querySelector("form");
const showInformation = document.querySelector(".showinformation");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Get input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;

  // Display the information
  showInformation.innerHTML = `
    <h2>User Information</h2>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contact Number:</strong> ${contact}</p>
  `;

  // Optional: Clear the form after submission
  form.reset();
});
