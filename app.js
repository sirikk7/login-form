function handleLogin() {
  // console.log("handleLogin is  called")

  var username = document.getElementById("email-id").value;

  var pwd = document.getElementById("password").value;

  if (username == "siri" && pwd == "12345") {
    document.getElementById("result").innerHTML =
      "Logging in...<span id='loader' /> ";
    document.getElementById("result").style.color = "Green";

    setTimeout(() => {
      window.location.pathname = window.location.pathname + "grades";
    }, 5000);
  } else {
    document.getElementById("result").innerHTML = "Invalid email Id /pwd";
    document.getElementById("result").style.color = "Red";
  }
  return false;
}
