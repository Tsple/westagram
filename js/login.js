const loginBtn = document.getElementById("loginBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const deepBlue = "#0095F6";
const skyBlue = "#b2dffc";

unActiveBtn();

loginEmail.addEventListener("keyup", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if (loginEmail && loginPassword.length >= 5) {
    onActiveBtn();
  }
  if (!loginPassword) {
    unActiveBtn();
  }
});

loginPassword.addEventListener("keyup", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
  console.log(loginPassword);
  if (loginEmail && loginPassword.length >= 5) {
    onActiveBtn();
  }
  if (!loginPassword) {
    unActiveBtn();
  }
});

function onActiveBtn() {
  loginBtn.style.backgroundColor = deepBlue;
  loginBtn.disabled = false;
  console.log("버튼 활성화");
}

function unActiveBtn() {
  loginBtn.style.backgroundColor = skyBlue;
  loginBtn.disabled = true;
  console.log("버튼 비활성화");
}

loginBtn.addEventListener("click", () => {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;
});
