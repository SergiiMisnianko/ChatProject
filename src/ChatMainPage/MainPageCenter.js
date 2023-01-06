import { useState } from "react";
import { connect } from "react-redux";
import { ListWrapper } from "../StoreDatabase/index"
import { ActionCreators } from "react-redux-undo";

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export { ChatList }


function ChatList({ list, toggleItem, deleteItem }) {
  return (
    <Box>
      {list.map((item, index) => (
        <ChatItem key={index} item={item} toggleItem={() => toggleItem(item)} deleteItem={() => deleteItem(item)} />
      ))}
    </Box>
  );
}

/*function EnemyMessage */
function ChatItem({ item, toggleItem, deleteItem }) {
  return (
    <Box className="enemy-message-wrapper">

      <Box className="user-info">
        <Avatar
          alt="Robot"
          src={item.avatar}
          sx={{ width: 80, height: 80 }}
        />
      </Box>

      <Box className="enemy-message-text">
        <Typography className="user-name">{item.enemyname} broadcasting: </Typography>
        <Typography className="text-message">{item.text}</Typography>
      </Box>

      <input type="checkbox" checked={item.done} className="message-checkbox" onClick={toggleItem}></input>
      
      <Button variant="contained"
                endIcon={<SendIcon />}
                color="secondary"
                onClick={deleteItem}
                size="large"
                sx={{ width: 80, height: 80 }}
            >
                Send
            </Button>
    </Box>
  );
}
