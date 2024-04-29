import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./body.css";
import Loader from 'rsuite/Loader';
import 'rsuite/Loader/styles/index.css';

export default function BodyData() {
  const [users, setUsers] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com/users/";

  const fetchUsers = async () => {
    try {
      let result = await axios.get(baseUrl);
      setUsers(result.data);
    } catch (err) {
      console.log("Something went wrong...");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);
  return (
    <div>
      <h4>Users Data</h4>
      {users?.length > 0 ? (
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>User Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 &&
              users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.address.city}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      ) : (
        <p className="load">
          <Loader />
        </p>
      )}
    </div>
  );
}
