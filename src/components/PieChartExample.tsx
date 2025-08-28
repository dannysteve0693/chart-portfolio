import { PieChart, Pie } from 'recharts';



function PieChartExample() {

  const todayData = [
    { name: 'Actual', value: 100 },
    { name: 'Target', value: 12 },
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
    <>
      <div className='text-center my-4'>
        <h2 className='text-2xl font-bold'>Area Clearance (in m2)</h2>
      </div>
      <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h3><strong>Today</strong></h3>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={todayData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                fill="#05337e"
                label
              />
            </PieChart>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h3><strong>Yesterday</strong></h3>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={yesterdayData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                fill="#05337e"
                label
              />
            </PieChart>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h3><strong>This Month</strong></h3>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={thisMonthData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                fill="#05337e"
                label
              />
            </PieChart>
        </div>
      </div>
    
    </>
  )
}

export default PieChartExample
