const form = document.querySelector(".booth-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const companyNameInput = document.getElementById("company-name");
  const companyNameError = document.getElementById("company-name-error");

  const boothSizeSelect = document.getElementById("booth-size");
  const boothSizeError = document.getElementById("booth-size-error");

  const tableSlotInput = document.getElementById("table-slot");
  const tableSlotError = document.getElementById("table-slot-error");

  const contactNameInput = document.getElementById("contact-name");
  const contactNameError = document.getElementById("contact-name-error");

  const contactPhoneInput = document.getElementById("contact-phone");
  const contactPhoneError = document.getElementById("contact-phone-error");

  // Validate Company Name
  if (!companyNameInput.validity.valid) {
    companyNameError.textContent = "Please enter a valid company name.";
    companyNameInput.classList.add("error");
  } else {
    companyNameError.textContent = "";
    companyNameInput.classList.remove("error");
  }

  // Validate Booth Size
  if (!boothSizeSelect.validity.valid) {
    boothSizeError.textContent = "Please select a booth size.";
    boothSizeSelect.classList.add("error");
  } else {
    boothSizeError.textContent = "";
    boothSizeSelect.classList.remove("error");
  }

  // Validate Table Slot
  if (!tableSlotInput.validity.valid) {
    tableSlotError.textContent =
      "Please enter a valid table slot number. (1-10)";
    tableSlotInput.classList.add("error");
  } else {
    tableSlotError.textContent = "";
    tableSlotInput.classList.remove("error");
  }

  // Validate Contact Name
  if (!contactNameInput.validity.valid) {
    contactNameError.textContent = "Please enter your name.";
    contactNameInput.classList.add("error");
  } else {
    contactNameError.textContent = "";
    contactNameInput.classList.remove("error");
  }

  // Validate Contact Phone
  if (!contactPhoneInput.validity.valid) {
    contactPhoneError.textContent = "Please enter a valid phone number.";
    contactPhoneInput.classList.add("error");
  } else {
    contactPhoneError.textContent = "";
    contactPhoneInput.classList.remove("error");
  }
});
