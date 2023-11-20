import React, {useState, useEffect} from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";


const Users = () => {
  const [users, setUsers] = useState([]);
  //getall user
  const getAllUser = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/users")
      setUsers(data)
      console.log(data);
    } catch (error) {
      console.log(error)
      toast.error("Someething Went Wrong")
    }
  }

  //lifecycle method
  useEffect(() => {
    getAllUser()
  }, [])

  // delete user
  const deleteUser = async (userId) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this user?");
      if (confirm) {
      await axios.delete(`/api/v1/auth/users/${userId}`);
      toast.success("User deleted successfully");

      getAllUser();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout title={"Dashboard - All Users"}>
    <div className="container-fluid m-3 p-3">
      <div className="row" style={{width: '100%', paddingLeft: '22%', display: 'flex'}}>
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>All Users</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default Users;