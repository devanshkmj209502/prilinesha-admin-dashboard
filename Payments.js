import React, { useEffect, useState } from "react";

const API =
  "https://69c553c98a5b6e2dec2c3832.mockapi.io/vehcile_list/vehcile_details";

const Payments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <h2>Payments</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Owner</th>
            <th>Vehicle</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.owner_name}</td>
              <td>{item.vehcile_no}</td>
              <td>Paid</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;