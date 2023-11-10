import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Products = ({ data, enabled }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data && data.products ? data.products : data);
    });

    return (
        <div
            className={`grid rounded-xl lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-purple-50 p-4 text-purple-950 ${
                enabled === false ? "hidden" : "block"
            }`}
        >
            {products.map((item, index) => (
                <div className={`border rounded-xl p-4`} key={item.id}>
                    <ProductItem item={item}></ProductItem>
                </div>
            ))}
        </div>
    );
};

export default Products;
