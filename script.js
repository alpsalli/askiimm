// ======================================
// Bizim Hikayemiz ❤️
// script.js - Temizlenmiş ve Optimize Edilmiş Sürüm
// ======================================

// -------------------------------
// Yazı Yazma Efekti
// -------------------------------
const text = "İyi ki hayatımdasın ❤️";
const typing = document.getElementById("typing");
let index = 0;

function typeWriter(){
    if(index < text.length){
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    }
}
typeWriter();

// -------------------------------
// Kalp Yağmuru
// -------------------------------
const heartContainer = document.getElementById("heart-container");

function createHeart(){
    const heart = document.createElement("span");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 35) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}
setInterval(createHeart, 250);

// -------------------------------
// Navbar Scroll
// -------------------------------
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 80){
        header.style.background = "rgba(0,0,0,.85)";
        header.style.padding = "0";
    } else {
        header.style.background = "rgba(0,0,0,.35)";
    }
});

// -------------------------------
// Başla Butonu
// -------------------------------
const startButton = document.getElementById("startButton");

if(startButton) {
    startButton.addEventListener("click", () => {
        document.querySelector("#story").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// -------------------------------
// Sayaç
// -------------------------------
const startDate = new Date("2026-03-17");

function updateCounter(){
    const today = new Date();
    const difference = today - startDate;

    const day = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hour = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(difference / (1000 * 60)) % 60;
    const second = Math.floor(difference / 1000) % 60;

    const dayBox = document.getElementById("days");
    const hourBox = document.getElementById("hours");
    const minuteBox = document.getElementById("minutes");
    const secondBox = document.getElementById("seconds");

    if(dayBox){
        dayBox.innerHTML = day;
        hourBox.innerHTML = hour;
        minuteBox.innerHTML = minute;
        secondBox.innerHTML = second;
    }
}
setInterval(updateCounter, 1000);
updateCounter();

// -------------------------------
// Scroll Animasyonu
// -------------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(sec => {
    observer.observe(sec);
});

// -------------------------------
// Fare İmleci Kalp (Sadece Bilgisayarda Görünür)
// -------------------------------
if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤";
        heart.style.position = "fixed";
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        heart.style.color = "#ff4d7d";
        heart.style.fontSize = "12px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "1s";
        heart.style.zIndex = "999";
        
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.opacity = "0";
            heart.style.transform = "translateY(-25px)";
        }, 20);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    });
}

// -------------------------------
// Rastgele Aşk Mesajları (Konsol)
// -------------------------------
const messages = [
    "Seni çok seviyorum ❤️",
    "İyi ki varsın 💖",
    "Hayatımın en güzel hediyesisin 🌹",
    "Sen gülünce dünya güzelleşiyor ✨",
    "Her gün seni yeniden seviyorum ❤️"
];

setInterval(() => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    console.log(random);
}, 5000);
