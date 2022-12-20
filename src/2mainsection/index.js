import { useState } from "react";
import { connect } from "react-redux";
import { LeftSidebar } from "../4_left_sidebar";
import { RightSidebar } from "../5_right_sidebar";
import { ListWrapper } from "../database/index"
import { ActionCreators } from "react-redux-undo";


function ChatList () {
  return (
    <div className="Chat-List">
     
    </div>
  );
}  

export { ChatList }

















/*

const mapState = (state) => ({
  items: state.list
});

const mapDispatch = (dispatch) => ({
  add: function (text) {
    dispatch({
      type: "ADD_ITEM",
      payload: text
    });
  },
  toggle: (item) =>
    dispatch({
      type: "ITEM_TOGGLE",
      payload: item
    }),
  remove: (item) =>
    dispatch({
      type: "ITEM_REMOVE",
      payload: item
    }),
  revert: () => dispatch(ActionCreators.undo()),
  repeat: () => dispatch(ActionCreators.redo())
});

export const Chat = connect(mapState, mapDispatch)(ChatView);




function MiddleSection() {
  return (
    <div className="middle-section">
     
    </div>
  );
}

function MainWrapper() {
  return (
    <div className="main-wrapper">
      <LeftSidebar />
      <MiddleSection />
      <RightSidebar />
    </div>
  );
}



function ChatItem({ item, onToggle }) {
  return (
    <div>
      <input type="checkbox" checked={item.done} onClick={onToggle} />
      {item.text}
    </div>
  );
}

function ChatList({ list, onToggle, onDelete }) {
  return (
    <div className="">
      {list.map((item, index) => (
        <div key={index}>
          <ChatItem item={item} onToggle={() => onToggle(item)} />
          <button onClick={() => onDelete(item)}>x</button>
        </div>
      ))}
    </div>
  );
}

function ChatForm({ onAdd }) {
  const [value, setValue] = useState("");

  const addClickHandler = () => {
    if (!value) {
      return;
    }

    onAdd(value);
    setValue("");
  };

  return (
    <div className="messageWrapper">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addClickHandler();
          }
        }}
      />

      <button onClick={addClickHandler}>Add item</button>
    </div>
  );
}

function ChatView({ items, add, toggle, remove, revert, repeat }) {
  return (
    <div className="App">
      <ChatForm onAdd={add} />
      {/* <ChatForm onAdd={(text) => addItem(text)} /> }
      <ChatList list={items} onToggle={toggle} onDelete={remove} />
    </div>
  );
}




function MessageItem1() {
  let list = [{ name: "Message-0" }, { name: "Message-1" }, { name: "Message-2" }]
  return (
    <div className="enemy-message">
      {<p>{list[0].name}</p>}
    </div>
  );
}
function MessageItem2() {
  let list = [{ name: "Message-0" }, { name: "Message-1" }, { name: "Message-2" }]
  return (
    <div className="enemy-message">
      {<p>{list[1].name}</p>}
    </div>
  );
}
function MessageItem3() {
  let list = [{ name: "Message-0" }, { name: "Message-1" }, { name: "Message-2" }]
  return (
    <div className="enemy-message">
      {<p>{list[2].name}</p>}
    </div>
  );
}
*/


/*
 <img src={item.avatar} alt="avatar" className="avatar"></img>
      <p>{item.post}</p>

<div className="sendedMessage">
      {list.map((item, index) => (
        <div key={index}>
          <MessageItem item={item} />
        </div>
      ))}
    </div>

<div key={index}>
<MessageItem item={item} />
<button onClick={() => onDelete(item)}>x</button>
</div>
*/