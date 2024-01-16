const dropdowns: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-dropdown]");

if (dropdowns.length) {
  dropdowns.forEach((dropdown): void => {
    dropdown.addEventListener("click", (e): void => {
      e.preventDefault();
      dropdown.classList.toggle("_active");
    });
    document.addEventListener("click", (e): void => {
      if (e.target !== dropdown) {
        dropdown.classList.remove("_active");
      }
    });
  });
}
