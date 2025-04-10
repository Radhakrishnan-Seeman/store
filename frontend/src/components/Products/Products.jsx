import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        setProducts([{name:'Mango'}]);
    },[]);
    return (  
        products.length > 0 &&
            products.map((product,id)=><ProductCard cardDetails={product} key={id}></ProductCard>)
    );
}

export default Products;