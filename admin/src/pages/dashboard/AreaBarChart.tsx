import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AppHeader } from "../../components/app-header/AppHeader";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { FaArrowUpLong } from "react-icons/fa6";
// import { LIGHT_THEME } from "../../../constants/themeConstants";
// import "./AreaCharts.scss";

const data = [
  {
    month: "Jan",
    loss: 70,
    profit: 100,
  },
  {
    month: "Feb",
    loss: 55,
    profit: 85,
  },
  {
    month: "Mar",
    loss: 35,
    profit: 90,
  },
  {
    month: "April",
    loss: 90,
    profit: 70,
  },
  {
    month: "May",
    loss: 55,
    profit: 80,
  },
  {
    month: "Jun",
    loss: 30,
    profit: 50,
  },
  {
    month: "Jul",
    loss: 32,
    profit: 75,
  },
  {
    month: "Aug",
    loss: 62,
    profit: 86,
  },
  {
    month: "Sep",
    loss: 55,
    profit: 78,
  },
];

const AreaBarChart = () => {
  //   const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bg-secondary-color p-4 md:p-3 rounded-md shadow-light relative">
      <div className="mb-8">
        <AppHeader>Total Revenue</AppHeader>
        <div className="flex items-center gap-4  text-gray-600">
          <div className="text-xl-text-color text-2xl font-bold">$50.4K</div>
          <div className="flex items-center gap-1 text-green-color">
            {/* <FaArrowUpLong /> */}
            <p>5% than last month.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}>
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                // fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={
                {
                  // fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                }
              }
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
              wrapperStyle={{ position: "absolute", top: "-90px", right: "0" }}
            />
            <Bar
              dataKey="profit"
              fill="#7069E5"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="loss"
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
