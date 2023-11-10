const ApiEanSearch = async (ean) => {
    const response = await fetch(`/api/varesok/ean/${ean}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return json.data;
};

export default ApiEanSearch;
