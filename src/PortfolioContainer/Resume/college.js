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
  createData('PG - Master of Technology (Agricultural Biotechnology) – Indian Institute of Technology, Kharagpur, West Bengal, India', '2022-2024', 'NA'),
  createData('UG - Bachelor of Technology (Biotechnology) – Sardar Vallabhbhai Patel University of Agriculture and Technology, Meerut, Uttar Pradesh, India -250110', '2018-2022', '8.105'),
  createData('INTERMEDIATE - Secondary School Certificate [12th] -Raj English School, Paharia, Varanasi [CBSE Board]', '2017-18', '80.2%' ),
  createData('MATRICULATION -High School Certificate [10th] -St.John’s School, Marhauli, Varanasi [ICSE Board]', '2015-16', '81.67%')
];

export default function BasicTables() {
  return (
    <Grid>
    <TableContainer sx={{width: '100%'}}component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Institute</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Percentage/CGPA</TableCell>
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