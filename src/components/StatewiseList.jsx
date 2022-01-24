import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

export default function StatewiseList(props) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>State/UT</TableCell>
                            <TableCell align="right">Confirmed</TableCell>
                            <TableCell align="right">Active</TableCell>
                            <TableCell align="right">Recovered</TableCell>
                            <TableCell align="right">Deceased</TableCell>
                            <TableCell align="right">Tested</TableCell>
                            <TableCell align="right">Vaccine Doses Administered</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.regional.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.counts.confirmed}</TableCell>
                                <TableCell align="right">{row.counts.confirmed - row.counts.deceased - row.counts.recovered}</TableCell>
                                <TableCell align="right">{row.counts.recovered}</TableCell>
                                <TableCell align="right">{row.counts.deceased}</TableCell>
                                <TableCell align="right">{row.counts.tested}</TableCell>
                                <TableCell align="right">{row.counts.vaccinated1}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

