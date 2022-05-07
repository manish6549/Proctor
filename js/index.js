// To add navbar to each page to id of navbar
$(document).ready(function () {
  $("#navbar").load("navbar.html");
});

// To load login page onClick
function logIn() {
  location.replace("login.html");
}

// To load onboard1 page onClick
function onBoardOne() {
  location.replace("onboard1.html");
}

// To load home page onClick
function home() {
  location.replace("home.html");
}

function settings() {
  location.replace("settings.html");
}

function check() {
  location.replace("check.html");
}

function exam() {
  location.replace("exam.html");
}

// To add new class which remove's unwanted css style when button is clicked
$(".btn-primary").click(function () {
  $(this).addClass("removed");
});

// To get rotate image 180 degree
$(".btn-primary").click(function () {
  $(this).toggleClass("down");
});

document.getElementById("toastbtn").onclick = function() {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show()) 
}