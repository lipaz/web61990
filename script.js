
  function checkForm()
  {

    var usernameTextElement = document.getElementById("username");
    var passwordTextElement = document.getElementById("password");

    /*Username / email Checks*/
    re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(!re.test(usernameTextElement.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      usernameTextElement.focus();
      return false;
    }


    /*Password Checks*/
    if(passwordTextElement.value.length < 6) {
      alert("Error: Password must contain at least six characters!");
      passwordTextElement.focus();
      return false;
    }

    re = /[0-9]/;
    if(!re.test(passwordTextElement.value)) {
      alert("Error: password must contain at least one number (0-9)!");
      passwordTextElement.focus();
      return false;
    }

    re = /[a-z]/;
    if(!re.test(passwordTextElement.value)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      passwordTextElement.focus();
      return false;
    }

    re = /[A-Z]/;
    if(!re.test(passwordTextElement.value)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");
      passwordTextElement.focus();
      return false;
    }

    re = /[!@#\$%\^&\*\(\)\-_=\+\\\|\[\]\{\};:\/?\.><]/;
    if(!re.test(passwordTextElement.value)) {
      alert("Error: password must contain at least one special char!");
      passwordTextElement.focus();
      return false;
    }
    alert("Success!\nUsername: " + usernameTextElement.value + "\nPassword: " + passwordTextElement.value);
    return true;
  }


function goToSingUp()
{
	
}