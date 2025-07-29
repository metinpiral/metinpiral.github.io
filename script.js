// Scroll animasyonu (görünürlüğe göre fade-in)
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Butona basınca mesaj göster
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {
  alert("Mail adresim: ornek@email.com\nİstediğin zaman yazabilirsin!");
});
