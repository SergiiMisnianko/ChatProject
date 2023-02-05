import { connect } from "react-redux";

import { PrimarySearchAppBar } from "./ChatMainPage/MainPageHeader";
import { Footer } from "./ChatMainPage/MainPageFooter";
import { MessageForm } from "./ChatMainPage/MessageForm"
import { ChatList } from "./ChatMainPage/MainPageCenter";
import { Box, Grid, } from "@mui/material";



export default function App() {
  return (
    <Chat />
  );
}

/* Lesson 27 1:40:00 */

function ChatView({ items, addItem, toggleItem, deleteItem, deleteAll }) {
  return (
    <Grid>
      <PrimarySearchAppBar deleteAll={deleteAll}/>

      <Box style={{ maxHeight: 550, overflow: 'auto'}} color="primary" background="prymary">
        <ChatList list={items} 
        toggleItem={toggleItem} 
        deleteItem={deleteItem}
        deleteAll={deleteAll} />
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


