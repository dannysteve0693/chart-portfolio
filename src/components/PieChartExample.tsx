import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';



function PieChartExample() {

  const todayData = [
    { name: 'Actual', value: 100 },
    { name: 'Target', value: 0 },
  ];
  const yesterdayData = [
    { name: 'Actual', value: 100 },
    { name: 'Target', value: 0 },
  ];
  const thisMonthData = [
    { name: 'Actual', value: 100 },
    { name: 'Target', value: 0 },
  ];




  return (
    <div className=' '>
      <div>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={todayData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>

      </div>
      <div>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={todayData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>

      </div>
      <div>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={todayData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>

      </div>
    </div>
  )
}

export default PieChartExample
