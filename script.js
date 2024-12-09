function nextStep(step) {
  document.querySelectorAll(".wizard-step").forEach((stepDiv) => {
    stepDiv.style.display = "none";
  });
  document.getElementById(`step-${step}`).style.display = "block";

  // Update confirmation data
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
  // Mock donation tracking
  const donation = {
    amount: document.getElementById("donationAmount").value,
    name: document.getElementById("donorName").value,
    email: document.getElementById("donorEmail").value,
  };

  console.log("Donation tracked:", donation); // Replace this with an API call if connected to a backend.

  // Show success message
  document.querySelectorAll(".wizard-step").forEach((stepDiv) => {
    stepDiv.style.display = "none";
  });
  document.getElementById("success-message").style.display = "block";
}
