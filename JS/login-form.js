document.getElementById('login-button').addEventListener('click', function () {
    const email = document.getElementById('email-input');
    const emailValue = email.value;

    const password = document.getElementById('password-input');
    const passwordValue = password.value;

    if (emailValue == 'mdtaseenfuad@gmail.com' && passwordValue == 'holu-lulu') {
        window.location.href = 'banking-cal.html'
    }
})