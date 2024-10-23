document.getElementById('switch-to-register').onclick = function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
};

document.getElementById('switch-to-login').onclick = function() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
};

document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Logic to validate the login credentials
    // If login is successful, redirect to the home page
    window.location.href = 'home.html'; // Change 'home.html' to your actual home page
};

document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here, you can add logic to handle registration (e.g., validation, sending data to a server)
    console.log('Registration form submitted');

    // After registration logic, redirect to the login form
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
};
