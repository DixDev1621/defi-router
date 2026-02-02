const API_URL = "https://defi-router-backend-1.onrender.com/";

// ---------- REGISTER ----------
async function registerUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Fill all fields");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      window.location.href = "login.html";
    }
  } catch {
    alert("Backend not running");
  }
}

// ---------- LOGIN ----------
async function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Fill all fields");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      window.location.href = "index.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch {
    alert("Backend not running");
  }
}

// ---------- LOGOUT ----------
function logoutUser() {
  localStorage.removeItem("token");
  alert("Logged out successfully");
  window.location.href = "login.html";
}
