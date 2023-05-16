$(document).ready(function () {
  console.log("tyty");

  $("#signup-form").submit(function () {
    var nm1 = $("#name1").val();
    var ps1 = $("#pass1").val();
    var ps2 = $("#fio").val();
    
    localStorage.setItem("login", nm1);
    localStorage.setItem("password", ps1);
    localStorage.setItem("fio", ps2);

 
  });

  $("#login-form").submit(function () {
    var enteredName = $("#name2").val();
    var enteredPass = $("#pass2").val();


    var storedName = localStorage.getItem("login");
    var storedPass = localStorage.getItem("password");


    if (enteredName == storedName && enteredPass == storedPass) {
       window.location.href = '/reg.html';  
       history.pushState(null, 'L', "/reg.html" )


    }
    else {
      history.pushState(null, 'L', "/aut.html" )
    }

  });
  const counter = document.getElementById('counter');
const audio = document.getElementById('audio');

function incrementCounter() {
    counter.textContent = Number(counter.textContent) + 1;
    animateCounter();
    playAudio();
}

function animateCounter() {
    counter.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counter.style.transform = 'scale(1)';
    }, 500);
}

function playAudio() {
    audio.currentTime = 0;
    audio.play();
}

// Обновление счетчика каждые 5 секунд (5000 миллисекунд)
setInterval(incrementCounter, 5000);

});


