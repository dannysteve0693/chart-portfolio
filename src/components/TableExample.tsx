
function TableExample() {
  return (
    <div>
        <table className="min-w-full border-collapse border border-gray-200">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Truck ID</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">Start From</th>
                    <th className="border border-gray-300 px-4 py-2">Start Time</th>
                    <th className="border border-gray-300 px-4 py-2">StockPile Destination</th>
                </tr>
            </thead>
            <tbody className='text-center '>
                <tr className='odd:bg-white even:bg-gray-100 border border-gray-300'>
                    <td>FM-12 [001]</td>
                    <td>01-01-2025</td>
                    <td>aabbcc</td>
                    <td>00:00</td>
                    <td>123123</td>
                </tr>
                <tr className='odd:bg-white even:bg-gray-100 border border-gray-300'>
                    <td>FM-12 [001]</td>
                    <td>01-01-2025</td>
                    <td>aabbcc</td>
                    <td>00:00</td>
                    <td>123123</td>
                </tr>
                <tr className='odd:bg-white even:bg-gray-100 border border-gray-300'>
                    <td>FM-12 [001]</td>
                    <td>01-01-2025</td>
                    <td>aabbcc</td>
                    <td>00:00</td>
                    <td>123123</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableExample
