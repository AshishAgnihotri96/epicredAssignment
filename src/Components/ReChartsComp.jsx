// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// const SalaryIncrementChart = ({ data }) => {

//   if (
//     !data ||
//     data.length === 0 ||
//     data.some(
//       (item) =>
//         !item.label ||
//         !item.salary ||
//         !item.investment ||
//         !item.country ||
//         !item.currency
//     )
//   ) {
//     return null;
//   }
//   const labelMap = {};

//   data.forEach((item) => {
//     const label = `${item.country} (${item.ranking})`;

//     labelMap[label] = true;
//   });

//   const labels = Object.keys(labelMap);

//   let curr = data[0].currency.split(" ");

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//     <BarChart data={data} width={600} height={300}>
//       <XAxis
//         dataKey="label"
//         label={{
//           value: "Rank of colleges",
//           position: "insideBottom",
//           offset: -4,
//           fontSize: 8,
//         }}
//       />
//       <YAxis
//         width={50} // Adjust the width of the Y-axis to accommodate the label
//         label={{
//           value: `Salary and Investment in ${curr[0]}`,
//           angle: -90,
//           position: "insideLeft",
//           offset: -2,
//           fontSize: 8,
//         }}
//         tick={{ fontSize: 8 }}
//       />
//       <Tooltip />
//       <Legend wrapperStyle={{ fontSize: 8 }} verticalAlign="top" align="right" />
//       <Bar
//         barSize={25}
//         dataKey="salary"
//         fill="#F98575"
//         name="Average annual salary after graduation"
//       />
//       <Bar
//         barSize={25}
//         dataKey="investment"
//         fill="#E34731"
//         name="Average total investment on education"
//       />
//     </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default SalaryIncrementChart;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SalaryIncrementChart = ({ data }) => {
  // Define placeholder labels for the X axis
  const placeholderLabels = ["Country"];

  // Check if data is available and valid
  const isDataAvailable =
    data &&
    data.length > 0 &&
    !data.some(
      (item) =>
        !item.label ||
        !item.salary ||
        !item.investment ||
        !item.country ||
        !item.currency
    );

  // If data is not available, create a blank dataset with just the placeholder labels
  const chartData = isDataAvailable
    ? data
    : placeholderLabels.map((label) => ({
        label,
        salary: 0,
        investment: 0,
      }));

  const labelMap = {};

  chartData.forEach((item) => {
    const label = `${item.country} (${item.ranking})`;
    labelMap[label] = true;
  });

  const labels = Object.keys(labelMap);

  let curr = isDataAvailable ? data[0].currency.split(" ") : ["Currency"];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData} width={600} height={300}>
        <XAxis
          dataKey="label"
          label={{
            value: "Rank of colleges",
            position: "insideBottom",
            offset: -4,
            fontSize: 8,
          }}
        />
        <YAxis
          width={50} // Adjust the width of the Y-axis to accommodate the label
          label={{
            value: `Salary and Investment in ${curr[0]}`,
            angle: -90,
            position: "insideLeft",
            offset: -2,
            fontSize: 8,
          }}
          tick={{ fontSize: 8 }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: 8 }} verticalAlign="top" align="right" />
        <Bar
          barSize={25}
          dataKey="salary"
          fill="#F98575"
          name="Average annual salary after graduation"
        />
        <Bar
          barSize={25}
          dataKey="investment"
          fill="#E34731"
          name="Average total investment on education"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalaryIncrementChart;

