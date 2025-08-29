import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;

type NeedleProps = {
    value: number;
    data: { name: string; value: number; color?: string }[];
    cx: number;
    cy: number;
    iR: number;
    oR: number;
    color: string;
};

const Needle: React.FC<NeedleProps> = ({ value, data, cx, cy, iR, oR, color }) => {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const ang = 180 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;

    const x0 = cx;
    const y0 = cy;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return (
        <>
            <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />
            <path d={`M${xba} ${yba} L${xbb} ${ybb} L${xp} ${yp} Z`} fill={color} stroke="none" />
        </>
    );
};

type chartData = {
    name: string;
    value: number;
    color?: string;
}

type PieChartComponentProps = {
    text: string;
    contentData: chartData[];
    needleValue: number;
}

function PieChartComponent(
    { text, contentData, needleValue }: PieChartComponentProps) {
    const iR = 60;
    const oR = 100;
    const cx = 150;
    const cy = 150;

    return (
        <div className="flex flex-col items-center">
            <div>
                <h2 className="font-bold text-lg">{text}</h2>
            </div>
            <PieChart width={300} height={180}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={contentData}
                    cx={cx}
                    cy={cy}
                    innerRadius={iR}
                    outerRadius={oR}
                >
                    {contentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color || "#8884d8"} />
                    ))}
                </Pie>

                <Needle value={needleValue} data={contentData} cx={cx} cy={cy} iR={iR} oR={oR} color="red" />

                <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="20"
                    fontWeight="bold"
                    fill="#000"
                >
                    {needleValue}%
                </text>

                {[...Array(11)].map((_, i) => {
                    const angle = 180 - i * 18; // 0..100 mapped to 180..0
                    const sin = Math.sin(-RADIAN * angle);
                    const cos = Math.cos(-RADIAN * angle);
                    const r = oR + 20; // distance from outer radius
                    const x = cx + r * cos;
                    const y = cy + r * sin;

                    return (
                        <text
                            key={i}
                            x={x}
                            y={y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="12"
                            fill="#333"
                        >
                            {i * 10}
                        </text>
                    );
                })}
            </PieChart>

            <div className="flex flex-col gap-6 mt-4">
                {contentData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span
                            className="w-10 h-4 rounded-sm"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm text-gray-700 font-medium">{entry.name}: {entry.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartComponent
