import { useState, useEffect, useCallback } from "react";
import { debounce, set } from "lodash";

export default function SearchForm({
    searchTermChanged,
    searchButtonClicked,
    autoCompleteResult,
    autoCompleteClick,
}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchButtonEnabled, setSearchButtonEnabled] = useState(false);
    const [autoCompleteDisplay, setAutoCompleteDisplay] = useState("hidden");
    const [autoCompleteLoader, setAutoCompleteLoader] = useState("block");

    useEffect(() => {
        setAutoCompleteLoader("block");
        setSearchButtonEnabled(searchTerm.length > 2);
        setAutoCompleteDisplay(searchTerm.length > 0 ? "block" : "hidden");
    }, [searchTerm]);

    useEffect(() => {
        setAutoCompleteLoader("hidden");
    }, [autoCompleteResult]);

    const debouncedSearchTermChanged = useCallback(
        debounce((searchTerm) => {
            searchTermChanged(searchTerm);
        }, 500),
        []
    );

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        debouncedSearchTermChanged(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setAutoCompleteDisplay("hidden");
        searchButtonClicked();
    };

    const autoCompleteSelected = (item) => {
        setAutoCompleteDisplay("hidden");
        autoCompleteClick(item);
    };

    return (
        <div className="bg-slate-200 font-sans text-purple-950 rounded-xl p-6 mb-4 relative">
            <h1 className="font-sans text-slate-950 text-2xl font-extrabold tracking-wide mb-4">
                Søk etter en dagligvarer
            </h1>
            <form onSubmit={onFormSubmit}>
                <input
                    type="search"
                    className="border rounded-full px-4 py-2"
                    placeholder="Varenavn eller EAN..."
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <button
                    type="submit"
                    className=" bg-purple-950 hover:bg-purple-800 disabled:bg-slate-400 text-purple-50 shadow-lg hover:shadow-sm rounded-full p-2 w-24 ms-2 text-sm font-bold tracking-wide uppercase"
                    onClick={(e) => searchButtonClicked()}
                    disabled={!searchButtonEnabled}
                >
                    Søk
                </button>
            </form>
            <div
                className={`bg-slate-100 max-h-96 grid gap-3 rounded-xl p-4 absolute shadow-xl overflow-scroll ${autoCompleteDisplay}`}
            >
                <div className={`col-span-2 ${autoCompleteLoader}`}>
                    Søker...
                </div>

                {autoCompleteResult.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={(e) => autoCompleteSelected(item)}
                        className="grid grid-cols-2 gap-3 text-start items-center bg-white hover:bg-purple-50 p-4 rounded-lg"
                    >
                        <div>{item.name}</div>
                        <div className="">
                            <img className="h-24" src={item.image} alt="" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
