class Quantity {
  targetElement!: HTMLElement;
  quantityBlock!: HTMLDivElement;
  input!: HTMLInputElement;
  inputValue!: number;
  minValue!: number;
  maxValue!: number;
  iconPlus!: HTMLButtonElement;
  iconMinus!: HTMLButtonElement;
  constructor() {
    document.addEventListener("click", (e: Event): void => {
      this.targetElement = e.target as HTMLElement;
      if (
        this.targetElement.closest("[data-quantity-plus]") ||
        this.targetElement.closest("[data-quantity-minus]")
      ) {
        this.quantityBlock = this.targetElement.closest(
          "[data-quantity]",
        ) as HTMLDivElement;

        if (this.quantityBlock) {
          this.input = this.quantityBlock.querySelector(
            "[data-quantity-value]",
          ) as HTMLInputElement;
          this.iconPlus = this.quantityBlock.querySelector(
            "[data-quantity-plus]",
          ) as HTMLButtonElement;
          this.iconMinus = this.quantityBlock.querySelector(
            "[data-quantity-minus]",
          ) as HTMLButtonElement;
        } else {
          console.error("Cannot find data attribute [data-quantity]");
        }

        if (this.input) {
          this.minValue = Number(this.input.dataset.quantityMin);
          this.maxValue = Number(this.input.dataset.quantityMax);
          this.inputValue = parseInt(this.input.value);
        } else {
          console.error("Cannot find data attribute [data-quantity-value]");
        }

        if (this.targetElement == this.iconPlus && this.iconMinus) {
          this.plusInit();
        } else if (this.targetElement == this.iconMinus && this.iconPlus) {
          this.minusInit();
        } else {
          console.error(
            "Cannot find data attributes [data-quantity-plus] or [data-quantity-minus]",
          );
        }
      }
    });
  }
  plusInit(): void {
    this.inputValue++;
    if (this.maxValue && this.inputValue <= this.maxValue) {
      this.input.value = String(this.inputValue);
      this.iconMinus.disabled = false;
    }
    if (this.inputValue == this.maxValue) {
      this.iconPlus.disabled = true;
    }
  }
  minusInit(): void {
    this.inputValue--;
    if (this.minValue && this.minValue <= this.inputValue) {
      this.input.value = String(this.inputValue);
      this.iconPlus.disabled = false;
    }
    if (this.inputValue == this.minValue) {
      this.iconMinus.disabled = true;
    }
  }
}

export default Quantity;
