// MENU MOBILNE

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


// ZAMYKANIE MENU PO KLIKNIĘCIU

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {
        navigation.classList.remove("open");
    });

});


// PROSTA ANIMACJA ELEMENTÓW PRZY PRZEWIJANIU

const elements = document.querySelectorAll(
    ".service, .about-content, .portfolio, .process-item, .contact-info, .contact-form"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});
