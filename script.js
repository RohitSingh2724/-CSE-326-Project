document.getElementById('switch-to-register').onclick = function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
};

document.getElementById('switch-to-login').onclick = function() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
};

document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault();
    window.location.href = 'home.html';
};

document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault();
    console.log('Registration form submitted');
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
};
