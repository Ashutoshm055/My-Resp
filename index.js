function Auth() {

  var name = document.querySelector(".form1>#name");
  var pass = document.querySelector(".form1>#pass");

  if (name == null) {
    alert("Please Sign in  or Register to continue");
  } else {
    if (name.value == "david055" && pass.value == "abc1234") {
      console.log("Login Successful!");
      window.location.href = "../UserDashboard/index.html";
    } else {
      alert("Wrong Information!");
    }
  }
}
