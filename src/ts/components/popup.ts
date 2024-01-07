export default class Popup {
  popups: NodeListOf<HTMLDivElement>;
  popupTargets: NodeListOf<HTMLButtonElement>;
  popupCloseIcons: NodeListOf<HTMLButtonElement>;
  body: HTMLBodyElement;
  lockPaddingItems: NodeListOf<HTMLElement>;
  unlock: boolean = true;
  timeout: number = 400;
  constructor() {
    this.popups = document.querySelectorAll("[data-popup]");
    this.popupTargets = document.querySelectorAll("[data-popup-target]");
    this.popupCloseIcons = document.querySelectorAll("[data-popup-close]");
    this.body = document.body as HTMLBodyElement;
    this.lockPaddingItems = document.querySelectorAll("[data-lock-padding]");

    if (this.popupTargets.length) {
      this.popupTargets.forEach((popupTarget, index): void => {
        popupTarget.addEventListener("click", (): void => {
          const currentPopup = this.popups[index] as HTMLDivElement;
          this.popupInit(currentPopup);
        });
      });
    }
    if (this.popupCloseIcons.length) {
      this.popupCloseIcons.forEach((popupCloseIcon): void => {
        popupCloseIcon.addEventListener("click", (): void => {
          this.popupClose(popupCloseIcon.closest(".popup")!);
        });
      });
    }
    document.addEventListener("keydown", (e): void => {
      if (e.which === 27) {
        const popupActive = document.querySelector(
          ".popup._open",
        ) as HTMLDivElement;
        if (popupActive) {
          this.popupClose(popupActive);
        }
      }
    });
  }
  popupInit(currentPopup: HTMLDivElement): void {
    if (currentPopup && this.unlock) {
      const popupActive = document.querySelector(
        ".popup._open",
      ) as HTMLDivElement;
      if (popupActive) {
        this.popupClose(popupActive, false);
      } else {
        this.bodyLock();
      }
      currentPopup.classList.add("_open");
      currentPopup.addEventListener("click", (e): void => {
        if (!(e.target as HTMLDivElement).closest(".popup__content")) {
          this.popupClose((e.target as HTMLDivElement).closest(".popup")!);
        }
      });
    }
  }
  bodyLock(): void {
    const wrapper = document.querySelector(".wrapper") as HTMLDivElement;
    const lockPaddingValue: string =
      window.innerWidth - wrapper.offsetWidth + "px";

    if (this.lockPaddingItems.length) {
      this.lockPaddingItems.forEach((lockPaddingItem): void => {
        lockPaddingItem.style.paddingRight = lockPaddingValue;
      });
    }

    this.body.style.paddingRight = lockPaddingValue;
    this.body.classList.add("locked");

    this.unlock = false;
    setTimeout((): void => {
      this.unlock = true;
    }, this.timeout);
  }
  popupClose(popupActive: HTMLDivElement, doUnlock = true) {
    if (this.unlock) {
      popupActive.classList.remove("_open");
      if (doUnlock) {
        this.bodyUnlock();
      }
    }
  }
  bodyUnlock(): void {
    setTimeout(() => {
      if (this.lockPaddingItems.length) {
        this.lockPaddingItems.forEach((lockPaddingItem): void => {
          lockPaddingItem.style.paddingRight = "0px";
        });
        this.body.style.paddingRight = "0px";
        this.body.classList.remove("locked");
      }
    }, this.timeout);

    this.unlock = false;
    setTimeout(() => {
      this.unlock = true;
    }, this.timeout);
  }
}
