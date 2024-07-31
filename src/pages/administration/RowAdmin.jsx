import axios from "axios";
import React from "react";

export const RowAdmin = ({ user }) => {
  const { id, user_name, email } = user;

  const fetchDelete = async () => {
    const url = `http://localhost:3000/users/${+id}`;
    try {
      console.log(id);
      const response = await axios.delete(url, id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="border-white">
      <th>{id}</th>
      <td>{user_name}</td>
      <td>{email}</td>
      <td>Canada</td>
      <td>12/16/2020</td>
      <td>
        <button className="btn-red" onClick={fetchDelete}>
          delete
        </button>
      </td>
    </tr>
  );
};
