import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import ApiSearch from "../utillities/ApiSearch";
import ApiEanSearch from "../utillities/ApiEanSearch";

export default function App() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchEnabled, setSearchEnabled] = useState(false);
    const [view, setView] = useState("search");
    const [eanSearchResult, setEanSearchResult] = useState({ products: [] });

    const search = () => {
        console.log(searchTerm);
        ApiSearch(searchTerm).then((products) => {
            setSearchResult(products);
            setSearchEnabled(true);
            setView("search");
        });
    };

    const searchTermChanged = (value) => {
        setSearchTerm(value);
    };

    const productClicked = (product) => {
        ApiEanSearch(product.ean).then((products) => {
            setEanSearchResult(products);
            setView("details");
        });
    };

    return (
        <div className="container mx-auto my-5 p-4">
            <SearchForm
                searchTermChanged={searchTermChanged}
                searchButtonClicked={search}
            ></SearchForm>
            {view === "search" && (
                <Products
                    data={searchResult}
                    productClicked={productClicked}
                    enabled={searchEnabled}
                />
            )}
            {view === "details" && <ProductDetails details={eanSearchResult} />}
        </div>
    );
}
