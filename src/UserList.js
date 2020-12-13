import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";

function UserList() {
  const [listOfUser, setlistOfUser] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      // console.log(res)
      setlistOfUser(res.data)
    );
  }, []);

  return (
    <Table striped bordered hover size="sm">
      <tr style={{ color: "yellow" }}>
        <th>ID</th>
        <th>NAME</th>
        <th>USERNAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>WEBSITE</th>
        <th>CITY</th>
        <th>ZIPCODE</th>
        <th>COMPANY</th>
      </tr>
      {listOfUser.map((user) => {
        return (
          <tbody>
            <tr>
              <th>{user.id}</th>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
              <th>{user.phone}</th>
              <th>{user.website}</th>
              <th>{user.address.city}</th>
              <th>{user.address.zipcode}</th>
              <th>{user.company.name}</th>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
}

export default UserList;
