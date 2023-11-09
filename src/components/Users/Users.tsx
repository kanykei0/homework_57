import { User } from "../../types";
import UserItem from "./UserItem";

interface Props {
  users: User[];
}
const Users: React.FC<Props> = ({ users }) => {
  return (
    <>
      <h4>Users</h4>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </>
  );
};

export default Users;
