import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Products = ({ data, productClicked, enabled }) => {
    const [products, setProducts] = useState([]);

    function validatePrice(product) {
        switch (typeof product.current_price) {
            case "number":
                return product.current_price;
            case "object":
                return product.current_price
                    ? product.current_price.price
                    : null;
            default:
                return null;
        }
    }

    useEffect(() => {
        const sortedProducts = data.sort((a, b) => {
            const priceA = validatePrice(a);
            const priceB = validatePrice(b);

            if (priceA === null || priceB === null) {
                return 0;
            }

            if (priceA < priceB) {
                return -1;
            }
            if (priceA > priceB) {
                return 1;
            }

            return 0;
        });

        setProducts(sortedProducts);
    });

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
                    onClick={() => productClicked(item)}
                >
                    <ProductItem item={item}></ProductItem>
                </button>
            ))}
        </div>
    );
};

export default Products;
