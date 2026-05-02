import React, { useEffect, useState } from "react";

const API =
  "https://69c553c98a5b6e2dec2c3832.mockapi.io/vehcile_list/vehcile_details";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <h2>Users</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Flat</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.owner_name}</td>
              <td>{item.phone_number}</td>
              <td>{item.flat_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;