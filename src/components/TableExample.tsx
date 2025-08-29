import { useState } from 'react';

interface Row {
    truckId: string;
    date: string;
    startFrom: string;
    startTime: string;
    destination: string;
}

const initialData: Row[] = [
    { truckId: "FM-12 [001]", date: "01-01-2025", startFrom: "aabbcc", startTime: "00:00", destination: "123123" },
    { truckId: "FM-13 [002]", date: "02-01-2025", startFrom: "zzxxcc", startTime: "01:30", destination: "654321" },
    { truckId: "FM-14 [003]", date: "03-01-2025", startFrom: "mnopqr", startTime: "03:15", destination: "789456" },
    { truckId: "FM-15 [004]", date: "04-01-2025", startFrom: "lmnopq", startTime: "04:45", destination: "321654" },
    { truckId: "FM-16 [005]", date: "05-01-2025", startFrom: "xyzuvw", startTime: "06:00", destination: "987321" },
];


function TableExample() {

    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);
    const rowsPerPage = 3;

    const filteredData = initialData.filter(
        (row) =>
            row.truckId.toLowerCase().includes(filter.toLowerCase()) ||
            row.date.includes(filter) ||
            row.startFrom.toLowerCase().includes(filter.toLowerCase()) ||
            row.startTime.includes(filter) ||
            row.destination.includes(filter)
    );

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const paginatedData = filteredData.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    return (
        <div className="overflow-x-auto p-4">
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Filter..."
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                        setPage(1);
                    }}
                    className="border border-gray-300 px-3 py-2 rounded-md w-64"
                />
            </div>

            <table className="min-w-full border-collapse border border-gray-200 table-auto whitespace-nowrap">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Truck ID</th>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">Start From</th>
                        <th className="border border-gray-300 px-4 py-2">Start Time</th>
                        <th className="border border-gray-300 px-4 py-2">StockPile Destination</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {paginatedData.map((row, idx) => (
                        <tr
                            key={idx}
                            className="odd:bg-white even:bg-gray-100 border border-gray-300"
                        >
                            <td>{row.truckId}</td>
                            <td>{row.date}</td>
                            <td>{row.startFrom}</td>
                            <td>{row.startTime}</td>
                            <td>{row.destination}</td>
                        </tr>
                    ))}
                    {paginatedData.length === 0 && (
                        <tr>
                            <td colSpan={5} className="py-4 text-gray-500">
                                No results found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className="px-3 py-1 border rounded-md disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages || 1}
                </span>
                <button
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages || totalPages === 0}
                    className="px-3 py-1 border rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>

    )
}

export default TableExample
