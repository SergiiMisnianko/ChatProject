import * as React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Typography from '@mui/material/Typography';

export { Footer }

function Footer() {
    return (
        <BottomAppBar />
    );
}

export default function BottomAppBar() {
    return (
        <React.Fragment>

            <CssBaseline />

            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0, mt: 5 }}>

                <IconButton color="secondary" >
                    <CopyrightIcon />  
                    <Typography variant="h6">Sergii Misnianko</Typography>
                </IconButton>
   
            </AppBar>

        </React.Fragment>
    );
}

/*
 <Toolbar>

                    <IconButton color="secondary" >
                        <NotificationsActiveIcon />
                    </IconButton>


                    <Box sx={{ flexGrow: 1 }}>
                    </Box>


                    <IconButton color="secondary">
                        <MoreIcon />
                    </IconButton>

                </Toolbar>

*/
