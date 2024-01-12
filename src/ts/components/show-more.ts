function showMore(): void {
  const showMoreContent: NodeListOf<HTMLUListElement> =
    document.querySelectorAll("[data-show-more]");
  const showMoreButtons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll("[data-show-more-button]");

  let initialLengthOfItems: number = 6;

  showMoreButtons.forEach((showMoreButton, index): void => {
    showMoreButton.addEventListener("click", (): void => {
      initialLengthOfItems += 3;

      const showMoreItemsLength: number = Array.from(
        showMoreContent[index].children,
      ).length;

      const showMoreItems: Element[] = Array.from(
        showMoreContent[index].children,
      );

      const visibleItems = showMoreItems.slice(0, initialLengthOfItems);

      visibleItems.forEach((visibleItem): void => {
        visibleItem.classList.add("_is-visible");
      });

      if (visibleItems.length == showMoreItemsLength) {
        showMoreButton.style.display = "none";
      }
    });
  });
}

export default showMore;
