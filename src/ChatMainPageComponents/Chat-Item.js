import { useState } from "react";
import { connect } from "react-redux";
import { ActionCreators } from "react-redux-undo";


/*  LESSON 27 TIME 49:59 */


function MessageForm() {
  return (
    <div className="message-form">
 
        <img className="user-avatar my-avatar" src="https://vraki.net/sites/default/files/mood/29_9.jpg"
          alt=""></img>

        <textarea name="message-value"
          className="message-form-text-area"
          placeholder="I`m broadcasting:">
        </textarea>

        <button className="message-form-send-button">SEND</button>
    
    </div>
  );
}


export function ChatList({ list }) {
  return (
    <div className="croll-page">
      {list.map((item, index) => (
        <ChatItem key={index} item={item} />
      ))}
    </div>
  );
}

/*function EnemyMessage */
function ChatItem({ item }) {
  return (
    <div className="enemy-message-wrapper">
       
       <div className="user-info">
        <img className="user-avatar" src={item.avatar}
          alt=""></img>
      </div>

      <div>
        <p className="user-name">{item.enemyname} broadcasting:</p>
        <p className="text-message">{item.text}</p>
      </div>

      <input type="checkbox" checked={item.done} ></input>

    </div>
  );
}












/* Result */
/*
export const ChatMish = connect(mapState, mapDispatch)(ChatView);




function ChatView({ items, add, toggle, remove, revert, repeat }) {
  return (
    <div className="ChatView">
      <ChatForm onAdd={add} />

      <UndoRedo undo={revert} redo={repeat} />
      <ChatList list={items} onToggle={toggle} onDelete={remove} />
    </div>
  );
}

<ChatForm onAdd={(text) => addItem(text)} />

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

export function ChatForm({ onAdd }) {

  const [value, setValue] = useState("");

  const addClickHandler = () => {
    if (!value) {
      return;
    }

    onAdd(value);
    setValue("");
  };

  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => { if (e.key === "Enter") { addClickHandler(); } }} />
        <button onClick={addClickHandler}>Add item</button>
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



export function UndoRedo({ undo, redo }) {
  return (
    <div>
      <button onClick={undo}>UNDO</button>
      <button onClick={redo}>REDO</button>
    </div>
  );
}
*/
