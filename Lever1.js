const headings = document.querySelectorAll("h2");

headings.forEach(function(heading) {
    heading.textContent = heading.textContent.toUpperCase();
});