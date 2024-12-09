function nextStep(step) {
  document.querySelectorAll(".wizard-step").forEach((stepDiv) => {
    stepDiv.style.display = "none";
  });
  document.getElementById(`step-${step}`).style.display = "block";

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
  const donation = {
    amount: document.getElementById("donationAmount").value,
    name: document.getElementById("donorName").value,
    email: document.getElementById("donorEmail").value,
    address: document.getElementById("donorAddress").value,
    cardNumber: document.getElementById("cardNumber").value,
  };

  console.log("Donation Submitted:", donation);

  document.querySelectorAll(".wizard-step").forEach((stepDiv) => {
    stepDiv.style.display = "none";
  });
  document.getElementById("success-message").style.display = "block";
}
