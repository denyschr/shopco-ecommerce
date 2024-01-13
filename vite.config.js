import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

export default defineConfig({
  plugins: [
    injectHTML(),
    {
      ...imagemin(["./public/img/**/*.{jpg,png,jpeg}"], {
        destination: "./public/img",
        plugins: [imageminWebp({ quality: 80 })],
      }),
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        product: "./product.html",
        category: "./category.html",
      },
    },
  },
  base: "/shopco-ecommerce/",
});
