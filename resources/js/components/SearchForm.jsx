import { useState, useEffect } from "react";

export default function SearchForm({ searchTermChanged, searchButtonClicked }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchButtonEnabled, setSearchButtonEnabled] = useState(false);

    useEffect(() => {
        setSearchButtonEnabled(searchTerm.length > 2);
    }, [searchTerm]);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        searchTermChanged(searchTerm);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        searchButtonClicked();
        console.log(searchTerm);
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
        </div>
    );
}
