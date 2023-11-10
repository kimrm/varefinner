import { useEffect } from "react";
import ProductItem from "./ProductItem";

export default function EanResult({ eanResult, enabled }) {
    return eanResult.products.map((item, index) => (
        <div
            className={`border rounded-xl p-4 ${
                enabled === true ? "block" : "hidden"
            }`}
            key={item.id}
        >
            <ProductItem item={item}></ProductItem>
        </div>
    ));
}
