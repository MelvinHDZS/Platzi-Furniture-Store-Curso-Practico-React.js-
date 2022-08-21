import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import addToCartImage from "../assets/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    //console.log("se presiona el boton");
    //En la consola salta este mensaje, por lo que si se
    //esta agregando. El problema es con el carrito como tal
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
