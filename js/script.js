const menuIcon =document.querySelector('#menu-icon');
const navLinks =document.querySelector('.nav-links');

/*navbar responsiveness*/
menuIcon.onclick =()=>{
navLinks.classList.toggle('active');
}

/*contact me validation  */
function sendEmail() {
    const email = document.getElementById("userEmail").value;
    const errorMsg = document.getElementById("error-msg");

    // Simple Email Regex Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        errorMsg.innerText = "Email field cannot be empty!";
        return;
    }

    if (!email.match(emailPattern)) {
        errorMsg.innerText = "Please enter a valid email address!";
        return;
    }

    // If Valid → Open Mail App
    errorMsg.innerText = "";

    window.location.href = `mailto:tushargawande456@gmail.com?subject=Portfolio Contact&body=Hello Tushar, my email is ${email}`;
}

//dark theme

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});

//sections

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

//animated background
window.addEventListener("load", function () {
    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: 50
            },
            color: {
                value: "#00adb5"
            },
            shape: {
                type: "char",
                character: [
                    { value: "0" },
                    { value: "1" },
                    { value: "{" },
                    { value: "}" },
                    { value: "<" },
                    { value: ">" }
                ]
            },
            opacity: {
                value: 0.8
            },
            size: {
                value: 14
            },
            move: {
                enable: true,
                speed: 2
            }
        }
    });
});

//data not available in project
function openModal(event) {
    event.preventDefault();
    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

//text animation
// Typing Animation
const textArray = [
    "Full Stack Developer",
    "Java Developer",
    "Frontend Developer",
    "Spring Boot Developer"
];

let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});