import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { useEffect } from "react";

export default function ProductListing() {
    const products=useSelector((state)=> state);
    const dispatch=useDispatch();
    
    const fetchProducts= async () => {
        const response= await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=> {
            console.log("Error : ",err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    },[]);

    //console.log("Products ",products);

  return (
    <div style={{paddingTop : "4.75rem"}} className="ui grid container">
        <ProductComponent />
    </div>
  );
}
