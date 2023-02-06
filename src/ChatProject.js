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
    <Chat />
  );
}


function ChatView({ items, addItem, toggleItem, deleteItem, deleteAll }) {
  return (
    <Grid>
      <PrimarySearchAppBar list={items} deleteAll={deleteAll}/>
     
      <Stack sx={{ width: '100%' }} spacing={2}>
      <LinearProgress color="secondary" />
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


});

export const Chat = connect(mapState, mapDispatch)(ChatView);


