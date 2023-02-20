import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore, RootStore } from "./RootStore";
import { IProduct } from "./ProductStore";
import { filter } from "lodash";

export interface ICart {
  products?: IProduct[];
}

export class CartStore {
  cart: ICart = { products: [] };
  rootStore: IRootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      cart: observable,
      addProductInCart: action,
      removeProductFromCart: action,

      getProducts: computed,
      getCartCount: computed,
    });
    this.rootStore = rootStore;
  }

  addProductInCart(product: IProduct) {
    this.cart.products?.push(product);
  }

  removeProductFromCart(product: IProduct) {
    const products = filter(this.cart.products, (p) => p.id !== product.id);
    this.cart.products = products || [];
  }

  get getProducts() {
    return this.cart.products || [];
  }
  get getCartCount() {
    return this.cart.products?.length || 0;
  }
}
