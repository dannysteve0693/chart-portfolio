import { useState, useEffect } from "react";
import { fetchTableData } from "../api";

import type { TableItem, TableDataItem } from "../types";

function TableExample() {
    const [tableContent, setTableContent] = useState<TableDataItem[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const rowsPerPage = 5;

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        fetchTableData(page, rowsPerPage)
            .then((raw: TableItem) => {
                if (!isMounted) return;
                setTableContent(raw.data);
                setTotalPages(raw.totalPages);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setTableContent([]);
            })
            .finally(() => setLoading(false));

        return () => {
            isMounted = false;
        };
    }, [page]);

    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full border-collapse border border-gray-200 table-auto whitespace-nowrap">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">No</th>
                        <th className="border px-4 py-2">Vehicle Name</th>
                        <th className="border px-4 py-2">Area Name</th>
                        <th className="border px-4 py-2">Target Qty Name</th>
                        <th className="border px-4 py-2">Stockpile Destination</th>
                        <th className="border px-4 py-2">Pile ID</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {loading ? (
                        <tr>
                            <td colSpan={6} className="py-4 text-gray-500">
                                Loading...
                            </td>
                        </tr>
                    ) : tableContent.length > 0 ? (
                        tableContent.map((row) => (
                            <tr
                                key={row.id}
                                className="odd:bg-white even:bg-gray-100 border border-gray-300"
                            >
                                <td>{row.no}</td>
                                <td>{row.verhicle_name}</td>
                                <td>{row.area_name}</td>
                                <td>{row.target_qty_name}</td>
                                <td>{row.stockpile_destination}</td>
                                <td>{row.pile_id}</td>
                            </tr>
                        ))
                    ) : (
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
