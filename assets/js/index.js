//nav menu code
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Video section reveal
const videoSection = document.querySelector(".video-showcase");

window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight * 0.85;
    const sectionTop = videoSection.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
        videoSection.classList.add("show");
    }
});

//meal section code 
const cards = document.querySelectorAll(".pro-card");
const dots = document.querySelectorAll(".focus-progress .dot");

let current = 0;
let interval;

function activate(index) {
    cards.forEach(c => c.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    cards[index].classList.add("active");
    dots[index].classList.add("active");
}

function startAuto() {
    interval = setInterval(() => {
        current = (current + 1) % cards.length;
        activate(current);
    }, 1700);
}

function stopAuto() {
    clearInterval(interval);
}

// hover pause
cards.forEach((card, i) => {
    card.addEventListener("mouseenter", () => {
        stopAuto();
        current = i;
        activate(i);
    });
    card.addEventListener("mouseleave", startAuto);
});

// init
activate(0);
startAuto();