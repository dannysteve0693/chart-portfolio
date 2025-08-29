import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, Cell } from 'recharts';

function BarChartExample() {
  const data = [
    {
      "name": "Page A",
      "uv": 30000,
      "color": "#3b82f6"
    },
    {
      "name": "Page B",
      "uv": 15000,
      "color": "#ef4444"
    },
  ]

  return (
    <div>
      <div className='mt-4'>
        <BarChart width={730} height={250} data={data} layout='vertical'>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis type='number' domain={[0, 35000]} label={{ value: "in Tonnes", position: "insideBottomRight", offset: -5 }} />
          <YAxis dataKey="name" type='category' />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="uv" position="insideRight" fill="#fff" />
          </Bar>
        </BarChart>
      </div>
      <div className='mt-4 px-4 py-5 '>
        <div className='flex flex-row justify-between w-[730px] h-[250px]'>
          <div className=''>
            <p>Production: 175,438.60</p>
            <p>Match Factor Plan: 1.00</p>
          </div>
          <div>
            <p>Total Stock: 45,000.00</p>
            <p>Match Factor Actual: 0</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BarChartExample
