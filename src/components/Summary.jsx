import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { addComma } from '../utils/addComma';

export default function Summary(props) {
    const changeBackground = (e, color) => {
        e.target.style.background = color;
    }

    return (
        <div style={{display: 'flex'}}>
            <Card elevation={0} sx={{ width: 150, height: 225, color: "#ff073a" }} 
                onMouseOver={(e) => changeBackground(e.target.style.background = '#FFDFE6')}
                onMouseLeave={(e) => changeBackground(e.target.style.background = 'white')}>
                <CardContent>
                    <Typography sx={{ fontSize: '12px !important', fontWeight: 600 }} gutterBottom>
                        Confirmed
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 0.8, fontSize: 12, fontWeight: 900 }} color="rgba(255,7,58,.6)">
                        DailyIncrease
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        {props.totalConfirmed ? addComma(props.totalConfirmed) : ""}
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
                        {props.totalConfirmed ? addComma(props.totalConfirmed - props.totalRecovered - props.totalDeceased) : ""}
                    </Typography>
                </CardContent>
            </Card>
            <Card elevation={0} sx={{ width: 150, height: 225, color: "#28a745" }}
                onMouseOver={(e) => changeBackground(e.target.style.background = '#CDEBD2')}
                onMouseLeave={(e) => changeBackground(e.target.style.background = 'white')}>
                <CardContent>
                    <Typography sx={{ fontSize: '12px !important', fontWeight: 600 }} gutterBottom>
                        Recovered
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 0.8, fontSize: 12, fontWeight: 900 }} color="rgba(40,167,69,.6)">
                        DailyIncrease
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        {props.totalRecovered ? addComma(props.totalRecovered) : ""}
                    </Typography>
                </CardContent>
            </Card>
            <Card elevation={0} sx={{ width: 150, height: 225, color: "#6c757d" }}
                onMouseOver={(e) => changeBackground(e.target.style.background = '#E4E6E8')}
                onMouseLeave={(e) => changeBackground(e.target.style.background = 'white')}>
                <CardContent>
                    <Typography sx={{ fontSize: '12px !important', fontWeight: 600 }} gutterBottom>
                        Deceased
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 0.8, fontSize: 12, fontWeight: 900 }} color="rgba(108,117,125,.6)">
                        DailyIncrease
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        {props.totalDeceased ? addComma(props.totalDeceased) : ""}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}