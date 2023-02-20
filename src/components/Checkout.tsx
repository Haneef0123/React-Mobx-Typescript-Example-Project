import { map, sum } from "lodash";
import { observer } from "mobx-react";
import { useStore } from "../store/useStore";

function Checkout() {
  const {
    rootStore: { cartStore },
  } = useStore();
  const totalPrice = sum(map(cartStore.getProducts, (p) => p.price));

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">
              {cartStore.getCartCount}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {map(cartStore.getProducts, (p) => (
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{p.title}</h6>
                </div>
                <button onClick={()=>cartStore.removeProductFromCart(p)} type="button" className="btn btn-light me-2">X</button>
                <span className="text-muted">{p.price}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (Euro)</span>
              <strong>${totalPrice}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default observer(Checkout);
