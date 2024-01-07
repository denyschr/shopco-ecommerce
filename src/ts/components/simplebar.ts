import SimpleBar from "simplebar";

const simpleBarItems: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-simplebar]");

if (simpleBarItems.length) {
  simpleBarItems.forEach((scrollBlock): void => {
    new SimpleBar(scrollBlock, {
      autoHide: false,
    });
  });
}
