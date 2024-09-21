document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation for password match
    var password = document.getElementById('regPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        alert('Registration Confirmed!');
        // Redirect to login page
        window.location.href = "login.html";
    }
});
