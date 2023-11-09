const UserForm = () => {
  return (
    <form>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select name="role" id="role" className="form-control">
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="active">Active</label>
        <input type="checkbox" name="active" id="active" />
      </div>
      <button type="submit" className="btn btn-dark mt-3">
        add
      </button>
    </form>
  );
};

export default UserForm;
