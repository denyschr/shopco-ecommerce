function menuInit() {
  const header = document.querySelector(".header") as HTMLElement;
  const overlay = document.querySelector(".header__overlay") as HTMLDivElement;
  const burger = document.querySelector(".burger") as HTMLButtonElement;

  function destroyMenu(): void {
    document.body.classList.remove("locked");
    document.documentElement.classList.remove("_menu-open");
  }

  if (burger) {
    burger.addEventListener("click", (): void => {
      document.body.classList.toggle("locked");
      document.documentElement.classList.toggle("_menu-open");
    });
  }

  window.addEventListener("click", (e): void => {
    if (e.target == overlay) destroyMenu();
    if (
      ((e.target as HTMLElement).classList.contains("menu__link") &&
        !(e.target as HTMLElement).classList.contains("menu__link--drop")) ||
      (e.target as HTMLElement).classList.contains("dropdown-menu__link")
    ) {
      destroyMenu();
    }
  });

  window.addEventListener("resize", (): void => {
    if (window.innerWidth > 991.98) destroyMenu();
  });

  let initialScrollPos: number = 0;
  window.addEventListener("scroll", (): void => {
    const currentScrollPos: number = window.scrollY;
    if (initialScrollPos > currentScrollPos) {
      header.classList.remove("_active");
    } else if (initialScrollPos > header.offsetHeight) {
      header.classList.add("_active");
    }
    if (currentScrollPos === 0) {
      header.classList.remove("_active");
    }
    initialScrollPos = currentScrollPos;
  });
}

export default menuInit;
