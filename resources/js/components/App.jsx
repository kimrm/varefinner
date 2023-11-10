import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import Products from "./Products";
import ApiSearch from "../utillities/ApiSearch";
import ApiEanSearch from "../utillities/ApiEanSearch";
import ApiAutocompleteSearch from "../utillities/ApiAutocompleteSearch";

export default function App() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchEnabled, setSearchEnabled] = useState(false);
    const [autoComplete, setAutoComplete] = useState([]);

    useEffect(() => {
        if (searchTerm.length > 2) {
            console.log("searching...");
            ApiAutocompleteSearch(searchTerm).then((products) => {
                setAutoComplete(products);
            });
        }
    }, [searchTerm]);

    const search = () => {
        ApiSearch(searchTerm).then((products) => {
            setSearchResult(products);
            setSearchEnabled(true);
        });
    };

    const autoCompleteClick = (item) => {
        ApiEanSearch(item.ean).then((products) => {
            setSearchResult(products);
            setSearchEnabled(true);
        });
    };

    const searchTermChanged = (value) => {
        console.log("searchTermChanged", value);
        setSearchTerm(value);
    };

    return (
        <div className="container mx-auto my-5 p-4">
            <SearchForm
                searchTermChanged={searchTermChanged}
                searchButtonClicked={search}
                autoCompleteResult={autoComplete}
                autoCompleteClick={autoCompleteClick}
            ></SearchForm>
            <Products data={searchResult} enabled={searchEnabled} />
        </div>
    );
}