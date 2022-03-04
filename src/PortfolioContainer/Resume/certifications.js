import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

function createData(certification, authority, date) {
  return { certification, authority, date };
}

const rows = [
  createData('Server-side Development with NodeJs, Express and MongoDB', 'Coursera/Hong Kong University of Science and Technology', '25 Jan 2022'),
  createData('Graduate Aptitude Test in Engineering  2021 – Biotechnology (GATE – BT), AIR-760', 'Indian Institute of Technology (IIT), Bombay', '2021' ),
  createData('Front-End Web Development with React ', 'Coursera/Hong Kong University of Science and Technology', '23 Dec 2020'),
  createData('Industrial Biotechnology', 'Coursera/Manchester University', '3 December 2020'),
  createData('Front-End Web UI Frameworks and Tools: Bootstrap 4', 'Coursera/Hong Kong University of Science and Technology', '11 Nov 2020'),
  createData('JavaScript Algorithms and Data Structures', "freeCodeCamp.org", 'Oct 3, 2020')
];

export default function BasicTable() {
  return (
    <Grid>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Certification</TableCell>
            <TableCell align="right">Authority</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.certification}
              </TableCell>
              <TableCell align="right">{row.authority}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}