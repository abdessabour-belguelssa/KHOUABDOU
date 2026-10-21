// script.js - KHOUABDOU Project

document.addEventListener("DOMContentLoaded", () => {
    console.log("KHOUABDOU App Initialized successfully!");

    // 1. Add interactive hover & active animation for paragraph spans
    const spans = document.querySelectorAll("main section span");
    spans.forEach((span, index) => {
        // Add smooth transition
        span.style.cursor = "pointer";
        span.style.transition = "all 0.3s ease";
        span.style.display = "inline-block";
        span.style.padding = "4px 8px";
        span.style.borderRadius = "4px";

        span.addEventListener("mouseenter", () => {
            span.style.transform = "scale(1.1)";
            span.style.backgroundColor = "#007bff";
            span.style.color = "#ffffff";
        });

        span.addEventListener("mouseleave", () => {
            span.style.transform = "scale(1)";
            span.style.backgroundColor = "transparent";
            span.style.color = "inherit";
        });

        span.addEventListener("click", () => {
            alert(`Cliquiti 3la: ${span.innerText}`);
        });
    });

    // 2. Add dynamic social media click events f footer
    const socialLinks = document.querySelectorAll("footer h5");
    socialLinks.forEach((link) => {
        link.style.cursor = "pointer";
        link.style.transition = "transform 0.2s ease";

        link.addEventListener("mouseenter", () => {
            link.style.transform = "translateX(5px)";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "translateX(0)";
        });
    });

    // 3. Optional: Add a simple Theme Toggle (Dark/Light mode)
    const header = document.querySelector("header");
    if (header) {
        const toggleBtn = document.createElement("button");
        toggleBtn.innerText = "🌙 Toggle Theme";
        toggleBtn.style.marginTop = "10px";
        toggleBtn.style.padding = "6px 12px";
        toggleBtn.style.cursor = "pointer";
        toggleBtn.style.border = "1px solid #ccc";
        toggleBtn.style.borderRadius = "5px";

        header.appendChild(toggleBtn);

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                document.body.style.backgroundColor = "#121212";
                document.body.style.color = "#ffffff";
            } else {
                document.body.style.backgroundColor = "#ffffff";
                document.body.style.color = "#000000";
            }
        });
    }
});