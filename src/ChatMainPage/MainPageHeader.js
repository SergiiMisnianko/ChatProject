import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import Button from '@mui/material/Button';

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function AvatarChips() {
    const handleClick1 = () => {
        console.log('You clicked the Butler.');

      };
      const handleClick2 = () => {
        console.log('You clicked the Terminator.');
      };
      const handleClick3 = () => {
        console.log('You clicked the Scientist.');
      };
   
    return (
      <Stack direction="row" spacing={1} >
      
      <Chip
          avatar={<Avatar alt="Butler" src="https://vraki.net/sites/default/files/inline/images/5_87.jpg" />}
          label="Butler"
          clickable
          size="medium"
          color="secondary"
          onClick={handleClick1}
        />

        <Chip
          avatar={<Avatar alt="Terminator" src="https://vraki.net/sites/default/files/inline/images/10_80.jpg" />}
          label="Terminator"
          clickable
          size="medium"
          color="secondary"
          onClick={handleClick2}
        />

        <Chip
          avatar={<Avatar alt="Scientist" src="https://vraki.net/sites/default/files/inline/images/22_72.jpg" />}
          label="Scientist"
          clickable
          size="medium"
          color="secondary"
          onClick={handleClick3}
        />

      </Stack>
    );
  }


export function PrimarySearchAppBar( list, room ) {
    const deleteAll = () => {list.deleteAll()}

    const changeRoom = () => {changeRoom(room)}

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


                    <AvatarChips />

                    <Button variant="contained"
                        endIcon={<SpeakerNotesOffIcon  />}
                        color="secondary"
                        onClick={deleteAll}
                        sx={{ ml: 1, }}
                        size="small">
                        Delete all messages
                     </Button>
                </Container>
            </AppBar>
        </Container>
    );
}

/*
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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
*/