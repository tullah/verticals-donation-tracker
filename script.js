function nextStep(step) {
  // Hide all steps
  document.querySelectorAll(".step").forEach((stepDiv) => {
    stepDiv.style.display = "none";
  });

  // Show the selected step
  document.getElementById(`step-${step}`).style.display = "block";

  // Update confirmation data on Step 3
  if (step === 3) {
    document.getElementById("confirmAmount").innerText = document.getElementById("donationAmount").value;
    document.getElementById("confirmName").innerText = document.getElementById("donorName").value;
    document.getElementById("confirmEmail").innerText = document.getElementById("donorEmail").value;
  }
}

function prevStep(step) {
  nextStep(step);
}

function submitDonation() {
  // Collect donation data
  const donation = {
    amount: document.getElementById("donationAmount").value,
    name: document.getElementById("donorName").value,
    email: document.getElementById("donorEmail").value,
  };

  console.log("Donation submitted:", donation);

  // Hide all steps and show success message
  document.querySelectorAll(".step").forEach((stepDiv) => {
    stepDiv.style.display = "none";
  });
  document.getElementById("success-message").style.display = "block";
}
