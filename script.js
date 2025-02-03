document.addEventListener("DOMContentLoaded", () => {
    // Function to update UTC time
    function updateUTCTime() {
        const timeElement = document.getElementById("utc-time");
        const now = new Date();
        timeElement.innerText = now.toUTCString();
    }

    setInterval(updateUTCTime, 1000); // Update every second
    updateUTCTime(); // Initial call

    // Enable Editing of User Info
    const editableFields = document.querySelectorAll(".editable");

    editableFields.forEach(field => {
        field.addEventListener("click", () => {
            const newValue = prompt(`Update ${field.previousElementSibling.innerText}:`, field.innerText);
            if (newValue !== null && newValue.trim() !== "") {
                field.innerHTML = newValue.includes("@") ? `<a href="mailto:${newValue}">${newValue}</a>` : newValue;
            }
        });
    });

  // Select the theme toggle button
const toggleBtn = document.getElementById("theme-toggle");

// Check local storage for a saved theme preference
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode and save the preference
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

});
