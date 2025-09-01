import React, { useState } from 'react'
import './App.css'
import BarChartExample from './components/BarChartExample'
import PieChartExample from './components/PieChartExample'
import TableExample from './components/TableExample'

function App() {
  const [page, setPage] = useState<"table" | "piechart" | "barchart">('table');

  const pages: Record<string, React.JSX.Element> = {
    barchart: <BarChartExample />,
    piechart: <PieChartExample />,
    table: <TableExample />,
  };

  return (
    <>
      <div className="container mx-auto p-4">
        {/* Navigation buttons */}
        <div className="mt-4 flex gap-2">
          <button
            className={'px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'}
            onClick={() => setPage("barchart")}>Bar Chart</button>
          <button
            className={'px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'}
            onClick={() => setPage("piechart")}>Pie Chart</button>
          <button
            className={'px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'}
            onClick={() => setPage("table")}>Table</button>
        </div>

        <div className='mt-4'>
          {pages[page]}
        </div>


      </div>

    </>
  )
}

export default App
