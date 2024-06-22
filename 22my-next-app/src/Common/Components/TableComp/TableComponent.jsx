import React from "react";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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



const TableComponent = ({headers,data,columns}) => {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {
              headers?.map((el,ind)=>{
                return  <StyledTableCell  align="right" key={`head_${ind}`}>{el} </StyledTableCell>
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data?.map((obj,ind)=>{
              return <StyledTableRow  align="right" key={`tr_${ind}`}>
                {
                  columns?.map((ele,index)=>{
                    return <StyledTableCell align="right" key={`td_${index}`}>{obj[ele]}</StyledTableCell>
                  })
                }
            </StyledTableRow>
            })
          }
          
        </TableBody>
      </Table>
      </TableContainer>      
    </div>
  );
};

export default TableComponent;
