import * as React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';

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

                <Toolbar>

                    <IconButton color="secondary" >
                        <NotificationsActiveIcon />
                    </IconButton>


                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton color="secondary">
                        <MoreIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}

