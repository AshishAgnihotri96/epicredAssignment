import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SavingsOverYearsChart = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const groupedData = data.reduce((acc, curr) => {
    const { year, country, cumulativeSavings } = curr;
    if (!acc[year]) acc[year] = { year };
    acc[year][country] = cumulativeSavings;
    return acc;
  }, {});

  const formattedData = Object.values(groupedData);
  const countries = [...new Set(data.map(d => d.country))];
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formattedData}>
        
        <XAxis
          dataKey="year"
          label={{
            value: "Number of years after your course starts",
            position: "insideBottom",
            offset: -4,
            fontSize: 8,
          }}
        />
        <YAxis
         width={50}
          label={{
            value: "Savings",
            angle: -90,
            position: "insideLeft",
            offset: -2,
            fontSize: 8,
          }}
          tick={{ fontSize: 8 }}
        />
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: 10 }} verticalAlign="top" align="right" />
        {countries.map((country, index) => (
          <Line
            key={country}
            type="monotone"
            dataKey={country}
            stroke={colors[index % colors.length]}
            activeDot={{ r: 8 }}
            name={`Savings in ${country}`}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SavingsOverYearsChart;
