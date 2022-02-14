import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductList = () => {

    const dispatch = useDispatch();// useDispatch returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
    
    const listOfProducts = async() => {
          const response = await axios
          .get('https://fakestoreapi.com/products')
          .catch((error) => console.log(error));
          dispatch(setProducts(response.data))
    }

    useEffect(() => {
        listOfProducts();
    },[]);

    return (
           <div className="ui grid container">
             <Product>
             </Product>
           </div>
    );
}

export default ProductList;