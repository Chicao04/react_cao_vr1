import React, {useState, addressState} from "react";
import { Footer, Navbar } from "../components";
import { FaUsers,FaUber, FaShoppingCart, FaDollarSign, FaClock, FaBox, FaList, FaChartBar, FaSignOutAlt, FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const ManageMyAccount = () => {
const [user, setUser] = useState({
  fullName: "Hieu Nguyen",
  email: "HieuNguyen@gmail.com",
  mobile: "0123456789",
  birthday: "01/01/2000", 
  phoneNumber: "0123456789",
  address: "ABC Street",
  postcode: "100000",
  province: "Hanoi",
  district: "",
  ward: "",
  gender: "Female",});

  return (
    <>
      <Navbar />
      <div className = "container">
        <Sidebar/>
        <div className = "flex-grow-1" style = {{marginLeft: "250px" }}>
          <h2 style={{marginTop: "30px"}}>Manage My Account</h2>
          <br />
          <div style={{display: "flex"}}>
            <div className = "card shadow-sm p-3" style = {{width: "35%"}}>  
              <p style={{fontSize: "23px"}}>Personal Profile</p>
              <div><p><strong>Name: </strong> {user.fullName}</p></div>
              <div><p><strong>Email: </strong> {user.email}</p></div>
              <div><p><strong>Mobile: </strong> {user.mobile}</p></div>
              <div><p><strong>Birthday: </strong> {user.birthday}</p></div>
            </div>
            <div className = "card shadow-sm p-3" style = {{left: "50px" ,  width: "60%"}}>  
              <div className = "s0" style={{display: "flex"}}>
                <div className = "s1" style={{width: "40%"}}>
                  <p style={{fontSize: "23px"}}>Address Book</p>
                  <p style={{fontSize :"14px"}}>DEFAULT SHIPPING ADDRESS</p>
                  <p><strong>Name:  </strong> </p>
                  <p><strong>Address: </strong></p>
                  <p><strong>Mobile: </strong></p>
                </div>
                <div className = "s1" style={{marginTop: "89px"}}>
                  <p>{user.fullName}</p>
                  <p>{user.address}</p>
                  <p> {user.phoneNumber}</p>
                </div>
              
              </div>
            </div>
          </div>
          <div className="card shadow-sm p-4 mt-4">
            <h4>Recent Orders</h4>
            <table className="table table-striped mt-3">
              <thead className="bg-light">
                <tr>
                  <th>Order#</th>
                  <th>Placed On</th>
                  <th>Items</th>
                  <th>Total</th>
                </tr>
              </thead>
              
            </table>
          </div>

        </div>
      </div>
      
    </>
  )
}





const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-white shadow position-fixed" style={{ width: "250px", height: "100vh", top: "90px", left: "0" }}>
           <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <Link to="/managemyaccount" className="nav-link text-white fw-bold bg-primary p-2 rounded">
            <FaUsers className="me-2" /> Manage my account
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/myprofile" className="nav-link text-dark">
            <FaBox className="me-2" /> My Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addressbook" className="nav-link text-dark">
            <FaList className="me-2" /> Address Book
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/myorder" className="nav-link text-dark">
            <FaChartBar className="me-2" /> My order
          </Link>
        </li>
      </ul>
      <hr />
      
         
    </div>
  );
};

export default ManageMyAccount