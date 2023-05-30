import React, { Reducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/store';
import { Table,Spinner } from 'reactstrap';
import { User } from '../Types/Types';



const Products: React.FC = () => {
  const users = useSelector((state) => state.app.users);
  const loading = useSelector((state) => state.app.loading);
  const error = useSelector((state) => state.app.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <Spinner>Loading ...</Spinner>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div><h1>
          Products
      </h1>
          <Table border={1}>
              <thead>
                  <tr>
                  <th>ID</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Street</th>
                      <th>City</th>
                      <th>Company name</th>
                
                </tr>
              </thead>
              <tbody>
                  {users && users.map((e:User) => <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.username}</td>
                      <td>{e.email}</td>
                      <td>{e.address.street}</td>
                      <td>{e.address.city}</td>
                      <td>{ e.company.name}</td>
                     
                      
                  </tr>)}
              </tbody>
      </Table>
      </div>
  );
};

export default Products;
    

