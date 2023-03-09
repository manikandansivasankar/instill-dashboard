import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const data = [
  {
    name: "Jan",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Feb",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Mar",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Apr",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "May",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Jun",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Jul",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Aug",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Sep",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Oct",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Nov",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
  {
    name: "Dec",
    past_half: getRndInteger(1, 1000),
    previous: getRndInteger(1, 1000),
  },
];

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="absolute -top-[64px] right-0 flex gap-4">
      {payload.map((entry: any, index: number) => {
        const total = data.reduce((acc, item: any) => {
          return acc + item[entry.value];
        }, 0);
        return (
          <div key={`item-${index}`} className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div
                style={{ backgroundColor: entry.color }}
                className="h-2 w-2 rounded-full bg-red-400"
              ></div>
              <div className="text-sm font-medium tracking-widest text-[#1818196B]">
                {entry.value.replace(/_/g, " ").toUpperCase()}
              </div>
            </div>
            <div className="font-medium text-[#181819E5]">${total}</div>
          </div>
        );
      })}
    </div>
  );
};

export default () => {
  return (
    <div className="h-full w-full rounded-xl border border-[#E6E7E9] bg-white">
      <div className="flex flex-col gap-2 px-5 pt-5">
        <div className="text-lg font-medium text-[#181819E5]">
          Your work summary
        </div>
        <div className="text-base font-normal text-[#1818196B]">Jan - Dec</div>
      </div>
      <div className="h-[300px] w-full pb-5 pr-5 pt-10">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
              dataKey="name"
              name="sh"
              axisLine={false}
              tickLine={false}
              padding={{ left: 35 }}
            />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend
              content={renderLegend}
              align={"right"}
              verticalAlign={"top"}
            />
            <Line
              dot={false}
              type="basis"
              dataKey="past_half"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              dot={false}
              type="basis"
              dataKey="previous"
              stroke="#F0D961"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
