document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');
    if (emailField.value === 'k.wahidkhan55@gmail.com' && passwordField.value === 'wahid') {
        window.location.href = 'bank.html'
    } else { alert('Provide the correct email and password'); }
    emailField.value = '';
    passwordField.value = '';
})


