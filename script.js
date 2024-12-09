function nextStep(step) {
  // Hide all steps
  document.querySelectorAll(".step").forEach((stepDiv) => {
    stepDiv.style.display = "none";
  });

  // Show the selected step
  document.getElementById(`step-${step}`).style.display = "block";

  // Update progress bar
  const progress = document.getElementById("progress");
  progress.style.width = `${(step - 1) * 50}%`;

  // Update confirmation data for Step 3
  if (step === 3) {
    document.getElementById("confirmAmount").innerText = document.getElementById("donationAmount").value || "0";
    document.getElementById("confirmName").innerText = document.getElementById("donorName").value || "N/A";
    document.getElementById("confirmEmail").innerText = document.getElementById("donorEmail").value || "N/A";
  }
}

function prevStep(step) {
  nextStep(step);
}

function submit
