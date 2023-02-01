import React, { useState } from "react";
import classes from "./Individual.module.css";

function Individual({ user }) {
  const [toggleDetails, setToggleDetails] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <p>{user.company.name}</p>
        <div>
          <p className={classes.header}>Contact</p>
          <p>{user.name}</p>
        </div>
        <div>
          <p className={classes.header}>City</p>
          <p>{user.address.city}</p>
        </div>
        <div>
          <p className={classes.header}>Street</p>
          <p>{user.address.street}</p>
        </div>
        <button
          className={classes.button}
          onClick={() => setToggleDetails((prev) => !prev)}
        >
          View Details
        </button>
      </div>

      {toggleDetails && (
        <div className={classes.details}>
          <p className={classes.header}>Description</p>
          <p>{user.company.bs}</p>

          <div className={classes.additional}>
            <div>
              <p className={classes.header}>Contact the Person</p>
              <p>{user.name}</p>
            </div>
            <div>
              <p className={classes.header}>Address</p>
              <p>
                {user.address.suite}, {user.address.street}, {user.address.city}
                , {user.address.zipcode}
              </p>
            </div>
            <div>
              <p className={classes.header}>Username</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p className={classes.header}>City</p>
              <p>{user.address.city}</p>
            </div>
            <div>
              <p className={classes.header}>Email</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p className={classes.header}>Phone</p>
              <p>{user.phone}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Individual;
