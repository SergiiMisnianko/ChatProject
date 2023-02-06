import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import Button from '@mui/material/Button';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'secondary',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export function PrimarySearchAppBar(list, deleteAll) {
       const test = () => {list.deleteAll()}

    return (
        <Container sx={{ flexGrow: 1 }} >
            <AppBar position="static" sx={{
                fdisplay: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                backgroundColor: "transparent",
            }} >

                <Toolbar>
                    <Typography
                        variant="h1"
                        noWrap
                        component="div"
                        color="secondary"
                        borderRadius="70px"
                        padding="20px"
                        paddingBottom="0"
                        sx={{
                            display: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textShadow: '10px 10px 30px #2400ff, -10px -10px 30px #7e2bd9',
                            }
                        }}
                    > STARCHAT
                    </Typography>

                </Toolbar>

                <Container sx={{
                    display: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }
                }}>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon color="secondary" />
                    </IconButton>

                    <Search sx={{ maxWidth: 300 }} >
                        <SearchIconWrapper >
                            <SearchIcon color="secondary" />
                        </SearchIconWrapper>

                        <StyledInputBase
                            placeholder="Search messages"
                            inputProps={{ 'aria-label': 'search' }}
                            color="secondary"
                        />
                    </Search>

                    <Button variant="contained"
                        endIcon={<SpeakerNotesOffIcon  />}
                        color="secondary"
                        onClick={test}
                        size="large"
                    >Delete all messages
                     </Button>
                </Container>
            </AppBar>
        </Container>
    );
}

/*
                   <IconButton color="secondary" onClick={test}>
                        <SpeakerNotesOffIcon  />
                        <Typography variant="h6" >
                            Delete all messages
                        </Typography>
                    </IconButton>
*/