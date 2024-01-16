function menuInit() {
  const header = document.querySelector(".header") as HTMLElement;
  const overlay = document.querySelector(".header__overlay") as HTMLDivElement;
  const burger = document.querySelector(".burger") as HTMLButtonElement;
  const topBanner = document.querySelector(".top-banner") as HTMLDivElement;
  const topBannerClose = topBanner.querySelector(
    ".top-banner__close",
  ) as HTMLButtonElement;

  let timeout: number = 500; // default value

  if (header.hasAttribute("data-timeout")) {
    timeout = parseFloat(header.dataset.timeout!);
  }

  function topBannerHandle(): void {
    setTimeout((): void => {
      topBanner.classList.remove("_hidden");
    }, timeout);
  }

  if (topBannerClose) {
    topBannerClose.addEventListener("click", (): void => {
      topBanner.style.display = "none";
    });
  }

  function destroyMenu(): void {
    document.body.classList.remove("locked");
    document.documentElement.classList.remove("_menu-open");
    topBannerHandle();
  }

  if (burger) {
    burger.addEventListener("click", (): void => {
      document.body.classList.toggle("locked");
      topBanner.classList.add("_hidden");
      if (document.documentElement.classList.contains("_menu-open")) {
        topBannerHandle();
      }
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
}

export default menuInit;
