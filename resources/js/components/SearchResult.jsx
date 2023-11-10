import ProductItem from "./ProductItem";

export default function SearchResult({ searchResult, enabled }) {
    return searchResult.map((item, index) => (
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
