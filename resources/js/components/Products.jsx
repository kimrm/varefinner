import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Products = ({ data, enabled }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const prodArr = data && data.products ? data.products : data;

        const sortedProducts = prodArr.sort((a, b) => {
            if (typeof a.current_price === "number") {
                return sortSearch(a, b);
            } else {
                return sortEan(a, b);
            }
        });

        setProducts(sortedProducts);
    });

    function sortSearch(a, b) {
        if (a.current_price < b.current_price) {
            return -1;
        }
        if (a.current_price > b.current_price) {
            return 1;
        }
        return 0;
    }

    function sortEan(a, b) {
        if (!a.current_price) {
            return 0;
        }
        if (!b.current_price.price) {
            return 0;
        }
        if (!b.current_price) {
            return 0;
        }
        if (!b.current_price.price) {
            return 0;
        }
        if (a.current_price.price < b.current_price.price) {
            return -1;
        }
        if (a.current_price.price > b.current_price.price) {
            return 1;
        }
        return 0;
    }

    return (
        <div
            className={`grid rounded-xl lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-slate-50 p-4 text-purple-950 ${
                enabled === false ? "hidden" : "block"
            }`}
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

export default Products;
