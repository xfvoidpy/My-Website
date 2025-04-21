// main.js

// Navbar linklerinin renk değişimi
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("bg-gray-900", "text-white");
        link.classList.add("bg-gray-700", "text-gray-200");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("bg-gray-900", "text-white");
            link.classList.remove("text-gray-200", "bg-gray-700");
        }
    });

    const contactLink = document.querySelector(".nav-link-contact");
    const scrollBottom = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    if (contactLink) {
        if (scrollBottom >= documentHeight - 10) {
            contactLink.classList.add("text-white", "font-bold");
            contactLink.classList.remove("text-gray-400");
        } else {
            contactLink.classList.remove("text-white", "font-bold");
            contactLink.classList.add("text-gray-400");
        }
    }
});

// Menü butonu tıklama
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// AOS başlat
AOS.init({
    duration: 800,
    once: true
});
