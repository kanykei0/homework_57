import React, { useState } from "react";
import { User } from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    active: false,
    role: "",
  });

  const [checked, setChecked] = useState<boolean>(false);

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...user,
    });
    setUser({
      name: "",
      email: "",
      active: false,
      role: "",
    });

    setChecked(false);
  };

  const checkBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    setUser((prev) => ({
      ...prev,
      active: isChecked,
    }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-control"
          value={user.role}
          onChange={changeUser}
        >
          <option value="">...</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="active">Active</label>
        <input
          type="checkbox"
          name="active"
          id="active"
          checked={checked}
          onChange={checkBoxChange}
        />
      </div>
      <button type="submit" className="btn btn-dark mt-3">
        add
      </button>
    </form>
  );
};

export default UserForm;
