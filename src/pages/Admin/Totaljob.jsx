import { PieChart } from "@mui/x-charts/PieChart";

function Totaljob() {
  return (
    <div className="flex-1 h-64 border border-gray-200 rounded-2xl flex justify-center items-center">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={200}
        height={200}
      />
    </div>
  );
}

export default Totaljob;
