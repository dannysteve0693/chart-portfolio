import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, Cell } from "recharts";
import { fetchBarChartData } from "../api";

type ApiItem = {
  stock_capacity_actual: number;
};

type ChartItem = {
  name: string;
  uv: number;
  color: string;
};

function BarChartExample() {
  const [chartData, setChartData] = useState<ChartItem[]>([]);

  // Random color generator
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchBarChartData()

        // Transform API data
        const transformed: ChartItem[] = Object.entries(result.data).map(
          ([key, value]) => ({
            name: key,
            uv: (value as ApiItem[]).reduce(
              (sum, item) => sum + item.stock_capacity_actual,
              0
            ),
            color: getRandomColor(),
          })
        );

        setChartData(transformed);
      } catch (err) {
        console.error("Error fetching chart data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-4">
        <BarChart width={730} height={250} data={chartData} layout="vertical">
          <XAxis
            type="number"
            label={{
              value: "in Tonnes",
              position: "insideBottomRight",
              offset: -5,
            }}
          />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="uv" position="insideRight" fill="#fff" />
          </Bar>
        </BarChart>
      </div>

      {/* 
      <div className="mt-4 px-4 py-5">
        <div className="flex flex-row justify-between w-[730px] h-[250px]">
          <div>
            <p>Production: 175,438.60</p>
            <p>Match Factor Plan: 1.00</p>
          </div>
          <div>
            <p>Total Stock: 45,000.00</p>
            <p>Match Factor Actual: 0</p>
          </div>
        </div>
      </div>
      
      */}
    </div>
  );
}

export default BarChartExample;
