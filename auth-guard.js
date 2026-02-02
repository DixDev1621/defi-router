// auth-guard.js

(function () {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to access this page");
    window.location.href = "login.html";
  }
})();
