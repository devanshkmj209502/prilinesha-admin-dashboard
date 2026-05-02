import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Overview() {
  const data = [
    { name: "Hatchback", value: 9 },
    { name: "SUV", value: 0 },
    { name: "Sedan", value: 4 },
  ];

  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ marginBottom: "20px" }}>Dashboard Overview</h2>

      <div className="cards">
        <div className="card">Total Vehicles: 50</div>
        <div className="card">Users: 50</div>
        <div className="card">Payments: 50</div>
      </div>

      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="rgb(241, 99, 99)"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Overview;