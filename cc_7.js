const updateButton = document.getElementById("update-btn");
const headlineInput = document.getElementById("headline-input");
const ctaHeadline = document.getElementById("cta-headline");

updateButton.addEventListener("click", function() {
  const newText = headlineInput.value;
  if (newText.trim() !== "") {
    ctaHeadline.textContent = newText;
    headlineInput.value = "";
  } else {
    alert("Please Type a New Headline");
  }
});
