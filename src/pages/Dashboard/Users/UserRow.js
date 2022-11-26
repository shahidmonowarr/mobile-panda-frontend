import { Button, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React from 'react';
import { toast } from 'react-toastify';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const UserRow = ({user, index, refetch}) => {
    const {email , role} = user;

    const makeAdmin = () => {
        fetch(`https://mobile-panda.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json()})
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success('Admin Created Successfully');
            }
            
        })
    }

    return (
        <StyledTableRow key={user._id}>
                <StyledTableCell component="th" scope="row">
                {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.role}</StyledTableCell>
                <StyledTableCell align="right">
                  {role !== 'admin' && <Button onClick={() => makeAdmin()}>
                    Update
                  </Button>}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button >
                    Remove
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
    );
};

export default UserRow;