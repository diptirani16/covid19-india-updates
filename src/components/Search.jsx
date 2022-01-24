import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search(props) {
    const [search, setSearch] = useState("");
    
    return (
        <>
            <Autocomplete freeSolo
                sx={{ width: 500 }}
                id="free-solo-2-demo"
                disableClearable
                options={props.states}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            endAdornment: (<SearchIcon color="primary" />)
                        }}
                    />
                )}
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    )
}
