import { useState, useEffect, useMemo } from "react";
import { fetchTableData } from "../api";

interface Row {
    actual_in_day: string | number;
    target_in_day: string | number;
    actual_in_yesterday: string | number;
    target_in_yesterday: string | number;
    actual_in_month: string | number;
    target_in_month: string | number;
}

function TableExample() {
    const [tableContent, setTableContent] = useState<Row[]>([]);
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);
    const rowsPerPage = 3;

    useEffect(() => {
        let isMounted = true;

        fetchTableData()
            .then((raw: Row[]) => {
                if (!isMounted) return;

                const maybeArray = raw;

                const normalized: Row[] = Array.isArray(maybeArray)
                    ? (maybeArray as Row[])
                    : maybeArray
                        ? [maybeArray as Row]
                        : [];

                setTableContent(normalized);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setTableContent([]);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredData = useMemo<Row[]>(() => {
        const arr = Array.isArray(tableContent) ? tableContent : [];
        if (!filter) return arr;
        const lower = filter.toLowerCase();
        return arr.filter((row) =>
            Object.values(row).some((v) => String(v).toLowerCase().includes(lower))
        );
    }, [tableContent, filter]);

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const paginatedData = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        return filteredData.slice(start, start + rowsPerPage);
    }, [filteredData, page]);

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
                        <th className="border px-4 py-2">Actual in Day</th>
                        <th className="border px-4 py-2">Target in Day</th>
                        <th className="border px-4 py-2">Actual in Yesterday</th>
                        <th className="border px-4 py-2">Target in Yesterday</th>
                        <th className="border px-4 py-2">Actual in Month</th>
                        <th className="border px-4 py-2">Target in Month</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {paginatedData.map((row, idx) => (
                        <tr
                            key={idx}
                            className="odd:bg-white even:bg-gray-100 border border-gray-300"
                        >
                            <td>{row.actual_in_day}</td>
                            <td>{row.target_in_day}</td>
                            <td>{row.actual_in_yesterday}</td>
                            <td>{row.target_in_yesterday}</td>
                            <td>{row.actual_in_month}</td>
                            <td>{row.target_in_month}</td>
                        </tr>
                    ))}
                    {paginatedData.length === 0 && (
                        <tr>
                            <td colSpan={6} className="py-4 text-gray-500">
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
    );
}

export default TableExample;
