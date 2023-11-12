import { useEffect } from "react";
import EanProducts from "./EanProducts";

export default function ProductDetails({ details }) {
    useEffect(() => {
        console.log("details: ", details);
    });
    return (
        <div className="container mx-auto my-5 p-4">
            <h1>Product details {details.ean}</h1>
            <EanProducts products={details.products}></EanProducts>
        </div>
    );
}
