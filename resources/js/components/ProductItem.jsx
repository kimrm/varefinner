import { useState, useEffect } from "react";

export default function ProductItem({ item }) {
    const [product, setProduct] = useState({
        name: "",
        image: "",
        current_price: "",
        store: {
            name: "",
        },
    });

    useEffect(() => {
        setProduct({
            name: item.name,
            image: item.image,
            current_price:
                typeof item.current_price === "number"
                    ? item.current_price
                    : item.current_price
                    ? item.current_price.price
                    : "ukjent",
            store: item.store ? item.store : { name: "" },
        });
    }, [item]);

    return (
        <div className="grid gap-3">
            <div className="mx-auto">
                <img
                    className="max-h-48"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div>
                <h2 className=" text-slate-800 w-64 h-12 mb-3 font-light">
                    {product.name}
                </h2>
                <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm">Pris:</div>
                    <div className="text-xl text-green-800 font-bold">
                        {product.current_price} kr
                    </div>
                    <div className="text-sm">Butikk:</div>
                    <div className="text-sm font-bold">
                        {product.store.name}
                    </div>
                </div>
            </div>
        </div>
    );
}
