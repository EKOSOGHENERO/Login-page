

function getInfo() {
    event.preventDefault();

  var userName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("result");

  const user = {
    username: "ekos123",
    password: "123456",
  };


  if ((userName == user.username) && (password == user.password)) {
    // alert successful.
    message.innerHTML = 'Logged in successfully!';
  } else {
    //alert Incorrect Username or password
    message.innerHTML = 'Incorrect Username or Password';
  }
}
