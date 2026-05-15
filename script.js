const authButton = document.getElementById("authButton");

function refreshAuthButton() {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (loggedIn) {
    authButton.textContent = "Đăng xuất";
    authButton.href = "#";
    authButton.onclick = function (event) {
      event.preventDefault();
      localStorage.removeItem("isLoggedIn");
      location.reload();
    };
  } else {
    authButton.textContent = "Đăng nhập";
    authButton.href = "dangnhap.html";
    authButton.onclick = null;
  }
}

refreshAuthButton();
