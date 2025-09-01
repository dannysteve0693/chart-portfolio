export type TypePieChart = {
    actual_in_day: string | number;
    target_in_day: string | number;
    actual_in_yesterday: string | number;
    target_in_yesterday: string | number;
    actual_in_month: string | number;
    target_in_month: string | number;
}

export type NeedleProps = {
    value: number;
    data: { name: string; value: number; color?: string, percent: number }[];
    cx: number;
    cy: number;
    iR: number;
    oR: number;
    color: string;
};

export type chartData = {
    name: string;
    value: number;
    color?: string;
    percent: number;
}

export type PieChartComponentProps = {
    text: string;
    contentData: chartData[];
    needleValue: number;
}


export type ApiItem = {
    stock_capacity_actual: number;
};

export type ChartItem = {
    name: string;
    uv: number;
    color: string;
};

export type PieChartDataProps = {
    name: string;
    value: number;
    color?: string;
    percent: number;
};
