import React, { useEffect, useState } from "react";
import "./administration.css";
import { RowAdmin } from "./RowAdmin";
import axios from "axios";
export const Administration = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/users";

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        // setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs border-white">
        <thead>
          <tr className="border-white">
            <th>N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Create at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <RowAdmin key={user.id} user={user}></RowAdmin>
          ))}
        </tbody>
      </table>
    </div>
  );
};
