import React, { useEffect, useState } from "react";
import "./administration.css";
import { RowAdmin } from "./RowAdmin";
import axios from "axios";
export const Administration = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length <= 0) fetchData();
    console.log(data);
  }, [data]);

  const url = "http://localhost:3000/users/find_deleted";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const dataChange = () => {
    fetchData();
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs border-white">
        <thead>
          <tr className="border-white">
            <th>N</th>
            <th>Name</th>
            <th>Email</th>
            <th>delete at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <RowAdmin key={user.id} func={dataChange} user={user}></RowAdmin>
          ))}
        </tbody>
      </table>
    </div>
  );
};
