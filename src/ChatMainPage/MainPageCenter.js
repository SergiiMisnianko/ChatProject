import { useState } from "react";
import { connect } from "react-redux";
import { ListWrapper } from "../StoreDatabase/index"
import { ActionCreators } from "react-redux-undo";

export { ChatList }


function ChatList({ list }) {
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

      <div className="enemy-message-text">
        <p className="user-name">{item.enemyname} broadcasting: </p>
        <p className="text-message">{item.text}</p>
      </div>

      <input type="checkbox" checked={item.done} className="message-checkbox"></input>

    </div>
  );
}









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
