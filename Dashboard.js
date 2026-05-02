import React from "react";
import "../styles/layout.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Hatchback", value: 9 },
  { name: "SUV", value: 0 },
  { name: "Sedan", value: 4 }
];

const Dashboard = () => {
  return (
    <div className="content">
      <h2>Dashboard Overview</h2>

      <div className="cards">
        <div className="card">Vehicles: 50</div>
        <div className="card">Users: 50</div>
        <div className="card">Payments: 50</div>
      </div>

      <div className="chart-box">
        <h3>Vehicle Analytics</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#555" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4f46e5" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default Dashboard;