
import React from "react";
const ProductItem = ({product,itemSelected}) => {
  

  return (
    <div className="productWrapper" onClick={()=>itemSelected(product)}>
      <img alt={product.core} src={product.imageUrl} />
      <p>{product.core}</p>
      <p >{product.wood}</p>
      <p >{product.lenght}</p>
      <p >{product.slug}</p>


    </div>
  );
};

export default ProductItem;
