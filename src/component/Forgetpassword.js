import React from 'react';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';


function Forgetpassword() {
    return (
        <div>
            <Box
                sx={{
                    my: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography variant="h4"> Where is your greasy head today?
                <br></br>
                    Let's try to refind your account !
                    <br></br>
                    A mail has been sent to you ! </Typography>
            </Box>
        </div>
    );
}
export default Forgetpassword;