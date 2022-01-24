import { Typography } from "@mui/material";
import React from "react";
import { NotificationsNone, History } from '@mui/icons-material'

export default function LastRefreshed(props) {
    return(
        <div style={{display: 'flex', color: "rgb(189, 190, 191)", alignItems: 'center' }}>
            <Typography sx={{ color: "#6c757d", fontWeight: 600, fontSize: 12}}>{props.refreshDate}</Typography>
            <NotificationsNone />
            <History />
        </div>
    )
}
