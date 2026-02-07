

//nav menu code
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}


const text1 = "What is your Fitness Goal?";
const text2 = "Choose your plan that fits your goal";

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const sub = document.getElementById("sub");

let i = 0;
let j = 0;

function typeLine1() {
    if (i < text1.length) {
        line1.innerHTML += text1.charAt(i);
        line1.style.opacity = 1;
        i++;
        setTimeout(typeLine1, 60);
    } else {
        setTimeout(typeLine2, 300);
    }
}

function typeLine2() {
    if (j < text2.length) {
        line2.innerHTML += text2.charAt(j);
        line2.style.opacity = 1;
        j++;
        setTimeout(typeLine2, 50);
    } else {
        setTimeout(() => {
            sub.innerHTML = "Start your transformation today with personalized fitness plans.";
            sub.style.opacity = 1;
        }, 300);
    }
}

typeLine1();




const section = document.getElementById("fitness");

window.addEventListener("scroll", () => {

    const position = section.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.3;

    if (position < screen) {
        section.classList.add("show");
    }

});




const counters = document.querySelectorAll('.num');

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 120;

    const update = () => {
        let current = +counter.innerText;

        const inc = target / speed;

        if (current < target) {
            counter.innerText = (current + inc).toFixed(target < 10 ? 1 : 0);
            setTimeout(update, 15);
        } else {
            counter.innerText = target;
        }
    }

    update();
});