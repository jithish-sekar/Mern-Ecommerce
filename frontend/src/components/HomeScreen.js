import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from '../data';
import axios from 'axios';
function HomeScreen (props){

  // const [products, setProduct] = useState([]);

  // useEffect(() => {
  //   const fetchData= async()=>{
  //     const {data} =await axios.get("http://localhost:5000/api/products")
  //     setProduct(data);
  //   }
  //   fetchData()
  //   return () => {
      
  //   }
  // }, [])

    return(
      
        <ul className='products'>
          {data.products.map(product => 
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
          )}
        </ul>)
      
    
          }

export default HomeScreen;
