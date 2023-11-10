const ApiAutocompleteSearch = async (searchTerm) => {
    const response = await fetch(
        `/api/autocomplete?search=${encodeURIComponent(searchTerm)}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const json = await response.json();
    return json.data;
};

export default ApiAutocompleteSearch;
