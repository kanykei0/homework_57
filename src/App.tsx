import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import { User } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([
    {
      name: "Kanykei",
      email: "duishenalievak@gmail.com",
      active: true,
      role: "admin",
    },
    {
      name: "Naruto",
      email: "hokage@gmail.com",
      active: false,
      role: "editor",
    },
  ]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <main className="container-fluid">
        <div className="row mt-3">
          <div className="col-4">
            <UserForm onSubmit={addUser} />
          </div>
          <div className="col-8">
            <Users users={users} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
