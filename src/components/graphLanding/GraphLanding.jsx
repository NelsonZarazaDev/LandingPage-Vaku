import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "BCG",
    2021: 1812,
    2022: 2029,
    2023: 1291,
    2024: 970,
  },
  {
    name: "Hepatitis B",
    2021: 2000,
    2022: 2026,
    2023: 1285,
    2024: 971,
  },
  {
    name: "Polio",
    2021: 2000,
    2022: 1730,
    2023: 1176,
    2024: 932,
  },
  {
    name: "Pentavalente",
    2021: 2000,
    2022: 1730,
    2023: 1177,
    2024: 932,
  },
  {
    name: "Rotavirus",
    2021: 2000,
    2022: 1694,
    2023: 1163,
    2024: 925,
  },
  {
    name: "Neumococo",
    2021: 2000,
    2022: 1739,
    2023: 1185,
    2024: 937,
  },
];

export default class GraphLanding extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <BarChart
          data={data}
          style={{ backgroundColor: 'white' }}
        >
          <CartesianGrid  />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="2021" fill="#5298bf" />
          <Bar dataKey="2022" fill="#8dc76b" />
          <Bar dataKey="2023" fill="#7bbde0" />
          <Bar dataKey="2024" fill="#a195f0" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
