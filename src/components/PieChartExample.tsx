import PieChartComponent from "./PieChartComponent";


function PieChartExample() {
  const todayData = [
    { name: "Actual", value: 75, color: "#05337e" },
    { name: "Target", value: 25, color: "#d3d3d3" },
  ];
  const yesterdayData = [
    { name: "Actual", value: 45, color: "#05337e" },
    { name: "Target", value: 55, color: "#d3d3d3" },
  ];
  const nextMonthData = [
    { name: "Actual", value: 60, color: "#05337e" },
    { name: "Target", value: 40, color: "#d3d3d3" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 ">
      <div className="flex flex-col items-center">
        <PieChartComponent text="Today" contentData={todayData} needleValue={75} />
      </div>
      <div className="flex flex-col items-center">
        <PieChartComponent text="Yesterday" contentData={yesterdayData} needleValue={45} />
      </div>
      <div className="flex flex-col items-center">
        <PieChartComponent text="Next Month" contentData={nextMonthData} needleValue={60} />
      </div>
    </div>
  );
}

export default PieChartExample;
