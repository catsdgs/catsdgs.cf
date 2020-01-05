var id = Math.floor((Math.random() * 100000) + 10000);
var otp = Math.floor((Math.random() * 100000) + 10000);


function isValid(){
var password = document.getElementById('password').value;
if (password == otp)
{alert('Valid code. Once you click "OK" your code will not work anymore.')
document.getElementById('PasswordField').submit();
}
else
{alert('Wrong code. Try again or refresh to get a new ID and code.')
document.getElementById('password').value = ''
}
}
