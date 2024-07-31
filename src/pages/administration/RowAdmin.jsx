import axios from "axios";
import React from "react";

export const RowAdmin = ({ user }) => {
  // console.log(user);
  console.log(Object.keys(user));
  const { id, user_name, email, deleted_at } = user;

  const fetchDelete = async () => {
    const url = `http://localhost:3000/users/${+id}`;
    try {
      const response = await axios.delete(url, id);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr className="border-white">
        <th>{id}</th>
        <td>{user_name}</td>
        <td>{email}</td>
        <td>{deleted_at}</td>
        <td>
          {deleted_at == null ? (
            <button className="btn-red" onClick={fetchDelete}>
              delete
            </button>
          ) : (
            <button className="btn-blue btn-primary">Active</button>
          )}
        </td>
      </tr>
    </>
  );
};
