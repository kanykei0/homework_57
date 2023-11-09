import React from "react";
import { User } from "../../types";

interface Props {
  user: User;
}
const UserItem: React.FC<Props> = ({ user }) => {
  let isActive = "inactive";
  let userRole = user.role;

  if (user.active === true) {
    isActive = "active";
  }
  if (user.role === "") {
    userRole = "User";
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5>{user.name}</h5>
        <span>{isActive}</span>
        <hr />
        <span>{user.email}</span>
        <p>{userRole}</p>
      </div>
    </div>
  );
};

export default UserItem;
