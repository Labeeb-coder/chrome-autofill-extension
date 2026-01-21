chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "AUTOFILL") {
    autofillForm();
  }
});

function autofillForm() {
  const userData = {
    name: "Muhammed Labeeb",
    email: "labeeb@gmail.com",
    phone: "9876543210",
    skills: "Python, JavaScript, Machine Learning, Web Development"
  };

  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach((field) => {
    const name = field.name?.toLowerCase() || "";
    const placeholder = field.placeholder?.toLowerCase() || "";
    const labelText = getLabelText(field).toLowerCase();

    const combined = name + placeholder + labelText;

    if (combined.includes("name")) {
      field.value = userData.name;
    } 
    else if (combined.includes("email")) {
      field.value = userData.email;
    } 
    else if (combined.includes("phone") || combined.includes("mobile")) {
      field.value = userData.phone;
    } 
    else if (combined.includes("skill") || combined.includes("experience")) {
      field.value = userData.skills;
    }
  });
}

function getLabelText(input) {
  if (input.id) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) return label.innerText;
  }
  return "";
}
