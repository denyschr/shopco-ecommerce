interface GoodsDetails {
  id: number;
  partNumber: string;
  name: string;
  image: string;
  image2x: string;
  rating: number;
  price: number;
  oldPrice?: number;
  discount?: number;
  color: string;
  size: string;
}

class GoodsRendering {
  goods: GoodsDetails[] = [];
  output: HTMLUListElement;

  constructor() {
    this.output = document.getElementById("goods") as HTMLUListElement;
    this.getGoods();
  }

  async getGoods(): Promise<void> {
    const response = await fetch("goods.json");
    if (!response.ok) {
      const message: string = `Error: ${response.status}`;
      throw new Error(message);
    } else {
      this.goods = await response.json();
      this.renderGoods(this.goods);
    }
  }

  renderGoods(goods: GoodsDetails[]): void {
    let template: string = "";
    goods.forEach((product): void => {
      const blockPrice = this.renderProductPrice(product);
      const blockRating = this.renderProductRating(product);

      template += this.renderProductTemplate(blockPrice, blockRating, product);
    });
    if (this.output) {
      this.output.innerHTML = template;
    }
  }

  renderProductPrice(product: GoodsDetails): string {
    let blockPrice: string = "";

    if (product.discount) {
      blockPrice = `<div class="price-product-card__current">$${product.price}</div>
      <div class="price-product-card__old">$${product.oldPrice}</div>
      <div class="price-product-card__discount">${product.discount}%</div>`;
    } else {
      blockPrice = `<div class="price-product-card__current">$${product.price}</div>`;
    }

    return blockPrice;
  }

  renderProductRating(product: GoodsDetails): string {
    let blockRating: string = "";

    if (product.rating % 1 === 0) {
      for (let i = 1; i <= product.rating; i++) {
        if (i == 1) {
          blockRating += `<img class="rating-card-product__item" src="icons/star-full.svg" alt="Rating ${product.rating} out of 5">`;
        } else {
          blockRating += `<img class="rating-card-product__item" src="icons/star-full.svg" alt>`;
        }
      }
    } else {
      const intNumber: number = Math.floor(product.rating);
      const fractionalPart: string[] = product.rating.toString().split(".");

      for (let i = 1; i <= intNumber; i++) {
        if (i == 1) {
          blockRating += `<img class="rating-card-product__item" src="icons/star-full.svg" alt="Rating ${product.rating} out of 5">`;
        } else {
          blockRating += `<img class="rating-card-product__item" src="icons/star-full.svg" alt>`;
        }
      }

      if (Number(fractionalPart[1]) == 5) {
        blockRating += `<img class="rating-card-product__item" src="icons/star-half.svg" alt>`;
      }
    }

    return blockRating;
  }

  renderProductTemplate(
    blockPrice: string,
    blockRating: string,
    product: GoodsDetails,
  ): string {
    return `<li class="category__item">
		<article class="category__product card-product">
			<a href="product.html" class="card-product__img">
				<img src="img/${product.image}" srcset="img/${product.image} 1x, img/${
          product.image2x
        } 2x" alt="${product.name}">
			</a>
			<div class="card-product__info">
				<h3 class="card-product__name title title--fs-20">
					<a href="product.html">${product.name}</a>
				</h3>
				<div class="card-product__rating rating-card-product">
					<div class="rating-card-product__items">${blockRating}</div>
					<div class="rating-card-product__value">${product.rating.toFixed(
            1,
          )}/<span>5</span></div>
				</div>
				<div class="card-product__price price-product-card">${blockPrice}</div>
			</div>
		</article>
	</li>`;
  }
}

export default GoodsRendering;
