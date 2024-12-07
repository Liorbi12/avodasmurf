// Open modal by setting display to 'block'
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close modal by setting display to 'none'
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

// Handle form submission and redirect to index.html
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'index.html'; // Redirect to homepage
}

// Handle form submission on login page
function handleLoginFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;

    // Save login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    window.location.href = 'index.html';
}

// Initialize login state on page load
function initializeLoginState() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const username = localStorage.getItem("username");

    if (isLoggedIn && username) {
        document.getElementById("auth-buttons").style.display = "none";
        document.getElementById("profile-icon").style.display = "flex";
        document.getElementById("username-display").innerText = username;
    } else {
        document.getElementById("auth-buttons").style.display = "flex";
        document.getElementById("profile-icon").style.display = "none";
    }
}

// Toggle profile dropdown visibility
function toggleProfileDropdown() {
    const dropdown = document.getElementById("profile-dropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

// Logout function to clear session
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = 'index.html';
}

// Run initialization on page load
window.onload = initializeLoginState;
