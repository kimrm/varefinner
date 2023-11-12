import { useEffect } from "react";
import ProductItem from "./ProductItem";

const EanProducts = ({ products }) => {
    useEffect(() => {
        console.log("Products: ", products);
    });
    return (
        <div
            className={`grid rounded-xl lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-slate-50 p-4 text-purple-950`}
        >
            {products.map((item, index) => (
                <button
                    className={`border rounded-xl p-4 bg-slate-100 hover:bg-slate-50 hover:shadow-xl focus:bg-slate-50 focus:shadow-xl`}
                    key={item.id}
                >
                    <ProductItem item={item}></ProductItem>
                </button>
            ))}
        </div>
    );
};

export default EanProducts;
