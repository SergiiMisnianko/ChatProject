import { connect } from "react-redux";
import { PrimarySearchAppBar } from "./ChatMainPage/MainPageHeader";
import { Footer } from "./ChatMainPage/MainPageFooter";
import { MessageForm } from "./ChatMainPage/MessageForm"
import { ChatList } from "./ChatMainPage/MainPageCenter";
import { Box, Grid, } from "@mui/material";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';




export default function App() {
  return (
    <Chat color="primary" background="prymary"/>
  );
}


function ChatView({ items, addItem, toggleItem, deleteItem, deleteAll, changeRoom }) {
  return (
    <Grid>
      <PrimarySearchAppBar list={items} deleteAll={deleteAll} changeRoom={changeRoom}/>
     
      <Stack sx={{ width: '100%' }} spacing={2}>
      <LinearProgress color="secondary" sx={{ mt: 1, }}/>
      </Stack>

      <Box style={{ maxHeight: 550, overflow: 'auto'}} color="primary" background="prymary">
        
        <ChatList list={items} 
        toggleItem={toggleItem} 
        deleteItem={deleteItem}
        />

      </Box>

      <MessageForm onAdd={(text) => addItem(text)} />

      <Footer />
    </Grid>
  );
}

const mapState = (state) => ({
  items: state.list
});

const mapDispatch = (dispatch) => ({
  addItem: function (text) {
    dispatch({
      type: "ADD_ITEM",
      payload: text,
    })
  },
  toggleItem: function (item) {
    dispatch({
      type: "TOGGLE_ITEM",
      payload: item,
    })
  },
  deleteItem: function (item) {
    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    })
  },
  deleteAll: function () {
    dispatch({
      type: "DELETE_ALL",
    })
  },
  changeRoom: function (room) {
    dispatch({
      type: "CHANGE_ROOM",
      payload: room,
    })
  }


});

export const Chat = connect(mapState, mapDispatch)(ChatView);


