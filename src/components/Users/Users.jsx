import React from "react";
import Individual from "../Individual/Individual";
import classes from "./Users.module.css";

const Users = ({ userData }) => {
  return (
    <main className={classes.container}>
      {userData.map((user, index) => {
        return <Individual user={user} key={index} />;
      })}
    </main>
  );
};

export default Users;
