const API_URL = import.meta.env.VITE_APP_API_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const headers = {
    Authorization: `${API_KEY}`,
};

const fetchTableData = async () => {
    const response = await fetch(`${API_URL}/Home/DatataChartPanelAreaClearance`, { headers });
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


export { fetchTableData, fetchBarChartData };