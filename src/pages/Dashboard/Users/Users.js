import { TableBody } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/shares/Loading/Loading';
import UserRow from './UserRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mobile-panda.onrender.com/user',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading />
    }
    return (
        <>
      <h2>User List: {users.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "auto" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Index</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
              <StyledTableCell align="right">Make Admin</StyledTableCell>
              <StyledTableCell align="right">Remove User</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) =><UserRow
            key={user._id}
            user={user}
            index={index}
            refetch={refetch}
            ></UserRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    );
};

export default Users;