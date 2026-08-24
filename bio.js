document.addEventListener("DOMContentLoaded", function() {
    const aboutText = "Data scientist and researcher with 10+ years of experience in computational analysis, signal and image processing, and machine learning. Combines a strong foundation in mathematics and mechanical engineering with hands-on expertise in deep learning, computer vision, and scientific programming to solve complex, data-driven problems across interdisciplinary domains.";
    document.querySelectorAll(".info").forEach(el => {
        el.textContent = aboutText;
    });
});