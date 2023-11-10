const ApiSearch = async (searchTerm) => {
    const response = await fetch(
        `/api/varesok?search=${encodeURIComponent(searchTerm)}`,
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

export default ApiSearch;
