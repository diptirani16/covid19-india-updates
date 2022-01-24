import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function Summary(props) {
   
    return (
        <div style={{display: 'flex'}}>
            <Card elevation={0} sx={{ width: 150, height: 225, color: "#ff073a" }}  >
                 <CardContent>
                    <Typography sx={{ fontSize: '12px !important', fontWeight: 600 }} gutterBottom>
                        Confirmed
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 0.8, fontSize: 12, fontWeight: 900 }} color="rgba(255,7,58,.6)">
                        DailyIncrease
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        {props.totalConfirmed ? new Intl.NumberFormat('en-IN').format(props.totalConfirmed) : ""}
                    </Typography>
                </CardContent>
            </Card>
            <Card elevation={0} sx={{ width: 150, height: 225, color: "#007bff", backgroundColor: "#DFEEFF" }}>
                <CardContent>
                    <Typography sx={{ fontSize: '12px !important', fontWeight: 600 }} gutterBottom>
                        Active
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 0.8, fontSize: 12, fontWeight: 900 }} color="#007bff99">
                        DailyIncrease
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        {props.totalConfirmed ? new Intl.NumberFormat('en-IN').format(props.totalConfirmed - props.totalRecovered - props.totalDeceased) : ""}
                    </Typography>
                </CardContent>
            </Card>
            <Card elevation={0} sx={{ width: 150, height: 225, color: "#28a745" }} >
                 <CardContent>
                    <Typography sx={{ fontSize: '12px !important', fontWeight: 600 }} gutterBottom>
                        Recovered
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 0.8, fontSize: 12, fontWeight: 900 }} color="rgba(40,167,69,.6)">
                        DailyIncrease
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        {props.totalRecovered ? new Intl.NumberFormat('en-IN').format(props.totalRecovered) : ""}
                    </Typography>
                </CardContent>
            </Card>
            <Card elevation={0} sx={{ width: 150, height: 225, color: "#6c757d" }} >
                 <CardContent>
                    <Typography sx={{ fontSize: '12px !important', fontWeight: 600 }} gutterBottom>
                        Deceased
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 0.8, fontSize: 12, fontWeight: 900 }} color="rgba(108,117,125,.6)">
                        DailyIncrease
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        {props.totalDeceased ? new Intl.NumberFormat('en-IN').format(props.totalDeceased) : ""}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}