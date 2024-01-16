const headerSearchIcon = document.getElementById(
  "search-icon",
) as HTMLButtonElement;

const headerSearchForm = document.querySelector(
  ".search-header",
) as HTMLFormElement;

const headerSearchClose = headerSearchForm.querySelector(
  ".search-header__button",
) as HTMLButtonElement;

if (headerSearchIcon && headerSearchForm && headerSearchClose) {
  headerSearchIcon.addEventListener("click", (): void => {
    document.body.classList.add("locked");
    headerSearchForm.classList.add("_active");
  });

  headerSearchClose.addEventListener("click", (): void => {
    document.body.classList.remove("locked");
    headerSearchForm.classList.remove("_active");
  });
}

const filterButton = document.querySelector(
  ".settings-category__filter",
) as HTMLButtonElement;

const filterButtonClose = document.querySelector(
  ".filter-catalog__close-button",
) as HTMLButtonElement;

if (filterButton && filterButtonClose) {
  filterButton.addEventListener("click", (): void => {
    document.documentElement.classList.add("_filter-open");
    document.body.classList.add("locked");
  });

  filterButtonClose.addEventListener("click", (): void => {
    document.documentElement.classList.remove("_filter-open");
    document.body.classList.remove("locked");
  });
}
