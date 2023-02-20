import { find } from 'lodash';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';

function ProductView() {
  const {rootStore:{productStore,cartStore}} = useStore();
  const {productId} = useParams();
  const product = find(productStore.getProducts,p=>p.id.toString()===productId) 
  const onClickBuyNow = () => {
    cartStore.addProductInCart(product!);
  }
  return (
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">{product!.title}</h2>
        <p className="lead">{product!.description}</p>
        <div>
          <button type="button" onClick={onClickBuyNow} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
      <div className="col-md-5 order-md-1">
      <img
          width="100%"
          height="400"
          src={product!.image}
          alt="Product"
        />
      </div>
    </div>
  )
}

export default observer(ProductView);