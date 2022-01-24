import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

export default function StatewiseList(props) {
    return (
        <>
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader  sx={{border: "2px solid gray",}}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ zIndex: 900 }}>State/UT</TableCell>
                            <TableCell align="right">Confirmed</TableCell>
                            <TableCell align="right">Active</TableCell>
                            <TableCell align="right">Recovered</TableCell>
                            <TableCell align="right">Deceased</TableCell>
                            <TableCell align="right">Tested</TableCell>
                            <TableCell align="right">Vaccinated (At least One Dose)</TableCell>
                            <TableCell align="right">Fully Vaccinated</TableCell>
                            <TableCell align="right">Vaccine Doses Administered</TableCell>
                            <TableCell align="right">Precationary Doses Administered</TableCell>
                            <TableCell align="right">Test Positivity Ratio</TableCell>
                            <TableCell align="right">Case Fatality Ratio</TableCell>
                            <TableCell align="right">Case Growth</TableCell>
                            <TableCell align="right">Population</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.regional.map((row) => (
                            <TableRow
                                key={row.name}
                                // sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
                                style={{ background: 'white',borderBottom: "2px solid gray" }}
                            >
                                {row.name != "INDIA" ?  <>
                                <TableCell component="th" scope="row" style={{
                                    position: 'sticky',
                                    left: 0,
                                    background: 'white',
                                    zIndex: 800,
                                    border: "2px solid gray"
                                }}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN').format(row.counts.confirmed)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN').format(row.counts.confirmed - row.counts.deceased - row.counts.recovered)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN').format(row.counts.recovered)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN').format(row.counts.deceased)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.counts.tested)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.counts.vaccinated1)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.counts.vaccinated2)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.counts.vaccinated1 + row.counts.vaccinated2)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.counts.precautionary)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.counts.precautionary)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.counts.precautionary)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.counts.precautionary)}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat('en-IN', { notation: "compact" }).format(row.population)}</TableCell> 
                                </> :
                                <></> }
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

