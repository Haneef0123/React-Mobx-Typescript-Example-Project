import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore, RootStore } from "./RootStore";

export interface Rating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export class ProductStore {
  products: IProduct[] = [];
  rootStore: IRootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      products: observable,
      fetchProducts: action,
      getProducts: computed,
    });
    this.rootStore = rootStore;
  }

  async fetchProducts() {
    const productsResponse = await axios.get(
      `https://fakestoreapi.com/products`
    );
    this.products = productsResponse?.data ?? [];
  }

  get getProducts() {
    return this.products;
  }
}
