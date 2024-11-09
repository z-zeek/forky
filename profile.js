document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("save-profile");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
  
    // Load profile data from Local Storage on page load
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      nameField.value = savedProfile.name;
      emailField.value = savedProfile.email;
    }
  
    // Save profile data to Local Storage when clicking the Save button
    saveButton.addEventListener("click", () => {
      const name = nameField.value.trim();
      const email = emailField.value.trim();
  
      if (!name || !email) {
        alert("Please fill out all fields!");
        return;
      }
  
      const profileData = { name, email };
      localStorage.setItem("profile", JSON.stringify(profileData));
  
      alert(`Profile updated and saved!\nName: ${name}\nEmail: ${email}`);
    });
  });
  