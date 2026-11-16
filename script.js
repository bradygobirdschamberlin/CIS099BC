// Change the message when the button is clicked.
const cheerButton = document.getElementById("cheer-button");
const cheerMessage = document.getElementById("cheer-message");

cheerButton.addEventListener("click", function () {
  cheerMessage.textContent = "Fly, Eagles Fly! Go Birds! 🦅";
});
