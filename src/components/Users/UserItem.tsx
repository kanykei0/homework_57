import React from "react";
import { User } from "../../types";

interface Props {
  user: User;
}
const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5>{user.name}</h5>
        <hr />
        <span>{user.email}</span>
        <p>{user.role}</p>
      </div>
    </div>
  );
};

export default UserItem;
