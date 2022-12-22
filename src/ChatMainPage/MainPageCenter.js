import { useState } from "react";
import { connect } from "react-redux";
import { ListWrapper } from "../Store/index"
import { ActionCreators } from "react-redux-undo";

export { ChatList, MessageForm }

function ChatList() {
  return (
    <div className="Chat-List">
      <scroll-container className="scroll-container">
        <scroll-page className="croll-page">
          <EnemyMessage />
        </scroll-page>

        <scroll-page className="scroll-page">
          <EnemyMessage />
        </scroll-page>

        <scroll-page className="scroll-page">
          <EnemyMessage />
        </scroll-page>

        <scroll-page className="scroll-page">
          <EnemyMessage />
        </scroll-page>

      </scroll-container>
    </div>
  );
}


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



function EnemyMessage() {
  return (
    <div className="enemy-message-wrapper">

      <div className="user-info">
        <img className="user-avatar" src="https://vraki.net/sites/default/files/inline/images/1_102.jpg"
          alt=""></img>
      </div>

      <div >
        <p className="user-name">Robot-1 broadcasting:</p>
        <p className="text-message"> ls take a look at the imagesr gqkje hgrkqeh grkhglkqg; lkalfglkjqlghlqegql hglqrehlhglhqglkrehgqlhgl</p>
      </div>

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
