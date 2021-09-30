import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios

        .get("https://fakestoreapi.com/products")
        .catch((error) => {
          console.log("Error", error);
        });
      dispatch(setProducts(response.data));
    };

    fetchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(products);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
