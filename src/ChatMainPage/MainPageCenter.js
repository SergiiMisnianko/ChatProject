import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
/*import Checkbox from '@mui/material/Checkbox'*/

export { ChatList }


function ChatList({ list, toggleItem, deleteItem, }) {
  return (
    <Box>
      {list.map((item, index) => (
        <ChatItem key={index} item={item} 
        toggleItem={() => toggleItem(item)} 
        deleteItem={() => deleteItem(item)} 
        />
      ))}
      
    </Box>
  );
}

/*function EnemyMessage */
function ChatItem({ item, toggleItem, deleteItem, }) {

  return (
    <Grid display="flex" background="main" container direction={item.order}>

      <Box>
        <Avatar
          alt="Robot"
          src={item.avatar}
          sx={{ width: 80, height: 80 }}
        />
      </Box>

      <Grid sx={{ flexGrow: 1 }} >
        <Typography variant="subtitle1">{item.enemyname} broadcasting: </Typography>

        <Typography variant="h6">{item.text}</Typography>
      </Grid>

      <IconButton color="primary" onClick={deleteItem}>
        <CancelIcon />
      </IconButton>

    </Grid>
  );
}

/*
<Checkbox
        label="Label"
        defaultChecked
        checked={item.done}
        onClick={toggleItem}
        color="secondary"
      />
*/
