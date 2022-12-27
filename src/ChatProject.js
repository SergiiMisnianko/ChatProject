import { connect } from "react-redux";

import { Header } from "./ChatMainPage/MainPageHeader";
import { Footer, MessageForm } from "./ChatMainPage/MainPageFooter";
import { ChatList } from "./ChatMainPage/MainPageCenter";



export default function App() {
  return (
    <Chat />
  );
}

/* Lesson 27 1:40:00 */

function ChatView({ items, addItem, toggleItem, deleteItem }) {
  return (
    <div className="Chat-Container">
      <div className="Chat-Wrapper">
        <Header />

        <div className="Chat-List">

          <scroll-container className="scroll-container">
            <ChatList list={items} toggleItem={toggleItem} deleteItem={deleteItem} />
          </scroll-container>

        </div>

        <MessageForm onAdd={(text) => addItem(text)} />
        <Footer />
      </div>
    </div>



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


});

export const Chat = connect(mapState, mapDispatch)(ChatView);


