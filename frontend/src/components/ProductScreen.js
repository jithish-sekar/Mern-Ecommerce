import React from "react";
import data from "../data";

function ProductScreen(props) {
  const product = data.products.find((value) => {
    return value.id == props.match.params.id;
  });
  return (
    <div className='details'>
      <div className='detailsImage'>
        <img src={product.images} alt='product'></img>
      </div>
      <div className='detailsInfo'>
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>
            {product.rating} stars ({product.numReviews} Reviews)
          </li>
          <li>
            Price: <b className="priceColor">{product.price}</b>
          </li>
          <li className="description">
            Description:
            <div>{product.description}</div>
          </li>
        </ul>
      </div>
      <div className='detailsAction'>
        <ul>
          <li>
            Price: <b className="priceColor">{product.price}</b>
          </li>
          <li className="statusCheck">
            status: {product.status}
            <i class='fa fa-check-circle' />
          </li>
          <li>
            Quantity: 
            <select className="selectQuantity">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </li>
          <li>
            {" "}
            <button className='cartButton'>
              <i class='fa fa-cart-plus' />
              Add to Cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ProductScreen;
