import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Table } from "react-bootstrap";

function UserListPage() {
  const [localUsers, setLocalUsers] = useState([]);

  const users = useSelector((state) => state.users);

  useEffect(() => {
    setLocalUsers(users);
  }, [users]);

  return (
   <Container>
     <h2>User List</h2>
     <Table striped bordered hover>
       <thead>
         <tr>
           <th>Name</th>
           <th>Surname</th>
           <th>Email</th>
         </tr>
       </thead>
       <tbody>
         {Array.isArray(localUsers) ? (
           localUsers.map((user, index) => (
             <tr key={index}>
               <td>{user.name}</td>
               <td>{user.surname}</td>
               <td>{user.email}</td>
             </tr>
           ))
         ) : (
           <tr>
             <td colSpan="3">No users available</td>
           </tr>
         )}
       </tbody>
     </Table>
   </Container>
 );
}

export default UserListPage;