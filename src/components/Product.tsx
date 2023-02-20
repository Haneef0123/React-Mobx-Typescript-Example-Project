import { IProduct } from "../store/ProductStore";
import { Link } from "react-router-dom";

interface Iprops {
  product: IProduct;
}

function Product(props: Iprops) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          width="100%"
          height="400"
          src={props.product.image}
          alt="Product"
        />
        <div className="card-body">
          <p className="card-text">
           {props.product.title}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                to={`/products/${props.product.id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </Link>
            </div>
            <b className="text-muted">€{props.product.price}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
