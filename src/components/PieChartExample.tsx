import PieChartComponent from "./PieChartComponent";
import { useEffect, useState } from "react";
import type { TypePieChart, PieChartDataProps } from "../types";
import { fetchTableData } from "../api";

function PieChartExample() {
  const [todayData, setTodayData] = useState<PieChartDataProps[]>([]);
  const [yesterdayData, setYesterdayData] = useState<PieChartDataProps[]>([]);
  const [nextMonthData, setNextMonthData] = useState<PieChartDataProps[]>([]);
  const [todayNeedleValue, setTodayNeedleValue] = useState(0);
  const [yesterdayNeedleValue, setYesterdayNeedleValue] = useState(0);
  const [nextMonthNeedleValue, setNextMonthNeedleValue] = useState(0);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const raw: TypePieChart[] = await fetchTableData();
        if (!isMounted) return;

        const normalized: TypePieChart[] = Array.isArray(raw)
          ? raw
          : raw
            ? [raw]
            : [];

        if (normalized.length === 0) return;

        const item = normalized[0]; // assuming you only care about first

        const todayActual = Number(item.actual_in_day ?? 0);
        const todayTarget = Number(item.target_in_day ?? 0);
        const yesterdayActual = Number(item.actual_in_yesterday ?? 0);
        const yesterdayTarget = Number(item.target_in_yesterday ?? 0);
        const monthActual = Number(item.actual_in_month ?? 0);
        const monthTarget = Number(item.target_in_month ?? 0);
        const todayPercent = todayTarget > 0 ? (todayActual / todayTarget) * 100 : 0;
        const yesterdayPercent = yesterdayTarget > 0 ? (yesterdayActual / yesterdayTarget) * 100 : 0;
        const monthPercent = monthTarget > 0 ? (monthActual / monthTarget) * 100 : 0;

        // build all states in one go
        setTodayData([
          { name: "Actual", value: todayActual, color: "#05337e", percent: Math.min(100, todayPercent) },
          { name: "Target", value: todayTarget, color: "#d3d3d3", percent: Math.max(0, 100 - todayPercent) },
        ]);
        setYesterdayData([
          { name: "Actual", value: yesterdayActual, color: "#05337e", percent: Math.min(100, yesterdayPercent) },
          { name: "Target", value: yesterdayTarget, color: "#d3d3d3", percent: Math.max(0, 100 - yesterdayPercent) },
        ]);
        setNextMonthData([
          { name: "Actual", value: monthActual, color: "#05337e", percent: Math.min(100, monthPercent) },
          { name: "Target", value: monthTarget, color: "#d3d3d3", percent: Math.max(0, 100 - monthPercent) },
        ]);

        setTodayNeedleValue(todayTarget > 0 ? Number(((todayActual / todayTarget) * 100).toFixed(2)) : 0);
        setYesterdayNeedleValue(yesterdayTarget > 0 ? Number(((yesterdayActual / yesterdayTarget) * 100).toFixed(2)) : 0);
        setNextMonthNeedleValue(monthTarget > 0 ? Number(((monthActual / monthTarget) * 100).toFixed(2)) : 0);

      } catch (err) {
        console.error("Fetch error:", err);
        setTodayData([]);
        setYesterdayData([]);
        setNextMonthData([]);
        setTodayNeedleValue(0);
        setYesterdayNeedleValue(0);
        setNextMonthNeedleValue(0);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 ">
      <div className="flex flex-col items-center">
        {
          todayData.length > 0 && (
            <PieChartComponent text="Today" contentData={todayData} needleValue={todayNeedleValue} />
          )
        }
      </div>
      <div className="flex flex-col items-center">
        {
          yesterdayData.length > 0 && (
            <PieChartComponent text="Yesterday" contentData={yesterdayData} needleValue={yesterdayNeedleValue} />
          )
        }
      </div>
      <div className="flex flex-col items-center">
        {
          nextMonthData.length > 0 && (
            <PieChartComponent text="Next Month" contentData={nextMonthData} needleValue={nextMonthNeedleValue} />
          )
        }
      </div>
    </div>
  );
}

export default PieChartExample;
