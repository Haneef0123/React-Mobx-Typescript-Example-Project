import { map } from "lodash";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../store/useStore";
import Product from "./Product";

function Products() {
  const {rootStore:{productStore}} = useStore();
  useEffect(()=>{
    productStore.fetchProducts();
  },[productStore])
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {map(productStore.getProducts, (p,index) =>(
            <Product product={p} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default observer(Products) ;
