document.getElementById('submit-input').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail=emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'sarker123@gmail.com' && userPassword == 'sarker'){
        console.log('Valid Login')
    }
    window.location.href='bank.html';

});

