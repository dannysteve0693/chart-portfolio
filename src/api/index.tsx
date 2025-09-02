const API_URL = import.meta.env.VITE_APP_API_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const headers = {
    Authorization: `${API_KEY}`,
    'Content-Type': 'application/json'
};

const fetchTableData = async (page: number, limit: number) => {
    const response = await fetch(`${API_URL}/Reports/topSoilRemoval?type=3&startDate=&endDate=&startMonth=&endMonth=&startYear=2024&endYear=2026&spot_id=&vehicle=&stockpile=`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            "search": [],
            page,
            limit,
            "sort": "DESC",
            "orderBy": "id"
        })
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

const fetchBarChartData = async () => {
    const response = await fetch(`${API_URL}/Home/DataChartBar`, { headers });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

const fetchPieChartData = async () => {
    const response = await fetch(`${API_URL}/Home/DatataChartPanelAreaClearance`, { headers });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}


export { fetchTableData, fetchBarChartData, fetchPieChartData };