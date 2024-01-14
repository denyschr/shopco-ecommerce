const dropdowns: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-dropdown]");

if (dropdowns.length) {
  dropdowns.forEach((dropdown): void => {
    dropdown.addEventListener("click", (e): void => {
      dropdown.classList.toggle("_active");
      e.preventDefault();
    });
    window.addEventListener("click", (e): void => {
      if (e.target !== dropdown) {
        dropdown.classList.remove("_active");
      }
    });
  });
}
