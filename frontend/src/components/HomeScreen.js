import React, { Component } from "react";
import data from "../data";
import { Link } from "react-router-dom";
class HomeScreen extends Component {
  render() {
    return (
      <div>
        <ul className='products'>
          {data.products.map((product) => (
            <li className='product'>
              <Link to={"/product/" + product.id}>
                <img
                  className='productImage'
                  src={product.images}
                  alt='product'
                />
              </Link>
              <div className='productName'>
                <Link to={"/product/" + product.id}>{product.name}</Link>
              </div>
              <div className='productBrand'>{product.brand}</div>
              <div className='productPrice'>{product.price}</div>
              <div className='productRating'>
                {product.rating} stars {product.numReviews}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HomeScreen;
