import { CartStore } from "./CartStore";
import { LoginStore } from "./loginStore";
import { ProductStore } from "./ProductStore";

export interface IRootStore{
    loginStore : LoginStore
    productStore : ProductStore
    cartStore : CartStore
}

export class RootStore implements IRootStore{
    loginStore : LoginStore
    productStore : ProductStore
    cartStore : CartStore

    
    loginToken: string = '';
    constructor(){
        this.loginStore = new LoginStore(this);
        this.productStore = new ProductStore(this);
        this.cartStore = new CartStore(this);
    }

}