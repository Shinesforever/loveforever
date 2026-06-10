/* ========================= */
/* PARTICLES BACKGROUND */
/* ========================= */

function createParticles(){

  const container =
  document.getElementById("particles");

  for(let i = 0; i < 45; i++){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "vw";

    particle.style.top =
    Math.random() * 100 + "vh";

    particle.style.animationDuration =
    (10 + Math.random() * 12) + "s";

    particle.style.opacity =
    Math.random();

    particle.style.transform =
    `scale(${Math.random() * 2})`;

    container.appendChild(particle);

  }

}

createParticles();

/* ========================= */
/* PASSWORD SYSTEM */
/* ========================= */

const CORRECT_PIN = "1011";

let enteredPin = "";

let attempts = 0;

const dots = [

  document.getElementById("dot1"),
  document.getElementById("dot2"),
  document.getElementById("dot3"),
  document.getElementById("dot4")

];

const attemptText =
document.getElementById("attemptText");

const lockScreen =
document.getElementById("lockScreen");

const mainWebsite =
document.getElementById("mainWebsite");

/* UPDATE DOTS */

function updateDots(){

  dots.forEach((dot,index)=>{

    dot.classList.remove("filled");

    if(index < enteredPin.length){

      dot.classList.add("filled");

    }

  });

}

/* SHAKE ANIMATION */

function shakeCard(){

  const card =
  document.querySelector(".lock-card");

  card.style.animation =
  "shake 0.4s ease";

  setTimeout(()=>{

    card.style.animation = "";

  },400);

}

/* CHECK PASSWORD */

function checkPassword(){

  if(enteredPin === CORRECT_PIN){

    attemptText.innerHTML =
    "Welcome My Love 💜";

    attemptText.style.color =
    "#c4b5fd";

    setTimeout(()=>{

      lockScreen.style.transition =
      "all 0.8s ease";

      lockScreen.style.opacity = "0";

      lockScreen.style.pointerEvents =
      "none";

      setTimeout(()=>{

        lockScreen.style.display =
        "none";

        mainWebsite.style.display =
        "block";

      },800);

    },600);

  }

  else{

    attempts++;

    attemptText.innerHTML =
    `Wrong Passcode • ${attempts} attempt`;

    attemptText.style.color =
    "#f9a8d4";

    shakeCard();

    setTimeout(()=>{

      enteredPin = "";

      updateDots();

    },500);

  }

}

/* NUMPAD */

document
.querySelectorAll(".num-btn[data-num]")

.forEach(button=>{

  button.addEventListener("click",()=>{

    if(enteredPin.length < 4){

      enteredPin +=
      button.dataset.num;

      updateDots();

      if(enteredPin.length === 4){

        setTimeout(()=>{

          checkPassword();

        },200);

      }

    }

  });

});

/* DELETE BUTTON */

document
.getElementById("delBtn")

.addEventListener("click",()=>{

  enteredPin =
  enteredPin.slice(0,-1);

  updateDots();

});

/* KEYBOARD SUPPORT */

document.addEventListener("keydown",(e)=>{

  if(lockScreen.style.display === "none")
  return;

  if(/^\d$/.test(e.key)){

    if(enteredPin.length < 4){

      enteredPin += e.key;

      updateDots();

      if(enteredPin.length === 4){

        setTimeout(()=>{

          checkPassword();

        },200);

      }

    }

  }

  if(e.key === "Backspace"){

    enteredPin =
    enteredPin.slice(0,-1);

    updateDots();

  }

});

/* ========================= */
/* MUSIC PLAYER */
/* ========================= */

const song =
document.getElementById("song");

const playBtn =
document.getElementById("playBtn");

const vinyl =
document.getElementById("vinyl");

playBtn.addEventListener("click",()=>{

  if(song.paused){

    song.play();

    playBtn.innerHTML =
    "⏸ Pause Music";

    vinyl.style.animationPlayState =
    "running";

  }

  else{

    song.pause();

    playBtn.innerHTML =
    "▶ Play Music";

    vinyl.style.animationPlayState =
    "paused";

  }

});

/* ========================= */
/* LOVE TIMER */
/* ========================= */

/*
Put your relationship date here
Example:
2025-01-01
*/


const loveStartDate = new Date("2022-06-11T00:00:00");
function updateLoveTimer() {
    const now = new Date();
    const difference = now.getTime() - loveStartDate.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(3, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateLoveTimer();
setInterval(updateLoveTimer, 1000);

/* ========================= */
/* SURPRISE BUTTON */
/* ========================= */

const heartBtn =
document.getElementById("heartBtn");

const secretMessage =
document.getElementById("secretMessage");

heartBtn.addEventListener("click",()=>{

  secretMessage.style.display =
  "block";

  secretMessage.style.animation =
  "fadeIn 0.6s ease";

  createFloatingHearts();

});

/* ========================= */
/* FLOATING HEARTS */
/* ========================= */

function createFloatingHearts(){

  for(let i = 0; i < 15; i++){

    const heart =
    document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom = "0";

    heart.style.fontSize =
    (18 + Math.random() * 22) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.animation =
    `floatUp ${
      2 + Math.random() * 3
    }s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(()=>{

      heart.remove();

    },5000);

  }

}

/* ========================= */
/* SCROLL REVEAL */
/* ========================= */

const revealElements =
document.querySelectorAll(
  ".timeline-card, .gallery-grid img, .count-box"
);

const revealObserver =
new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
      "translateY(0)";

    }

  });

},{
  threshold:0.1
});

revealElements.forEach((element)=>{

  element.style.opacity = "0";

  element.style.transform =
  "translateY(40px)";

  element.style.transition =
  "all 0.8s ease";

  revealObserver.observe(element);

});

/* ========================= */
/* EXTRA ANIMATIONS */
/* ========================= */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatUp{

  0%{
    transform:
    translateY(0)
    scale(0.8);

    opacity:1;
  }

  100%{
    transform:
    translateY(-100vh)
    scale(1.4);

    opacity:0;
  }

}

@keyframes shake{

  0%{
    transform:translateX(0);
  }

  25%{
    transform:translateX(-8px);
  }

  50%{
    transform:translateX(8px);
  }

  75%{
    transform:translateX(-8px);
  }

  100%{
    transform:translateX(0);
  }

}

@keyframes fadeIn{

  from{
    opacity:0;
    transform:translateY(20px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }

}

`;

document.head.appendChild(style);
