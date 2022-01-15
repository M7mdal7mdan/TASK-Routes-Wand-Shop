import React,{useState} from 'react';


const ProductDetial =({product}) => {
    const [select , setSelect] = useState("");
    
   return(
     <div className="productSelection">
          <h3 className="productSelection p"> {product.core}</h3>
          <p className="productSelection p">{product.wood}</p>
          <p className="productSelection p">{product.length}</p>
          <p className="productSelection p">{product.slug}</p>
          <img className="productSelection img" src={product.imageUrl}/>
          
          

     </div>

   );
        
    
};

export default ProductDetial
