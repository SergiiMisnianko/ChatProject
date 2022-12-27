import { useState } from "react";
import { connect } from "react-redux";
import { ListWrapper } from "../StoreDatabase/index"
import { ActionCreators } from "react-redux-undo";

export { ChatList }


function ChatList({ list, toggleItem, deleteItem }) {
  return (
    <div className="croll-page">
      {list.map((item, index) => (
        <ChatItem key={index} item={item} toggleItem={()=>toggleItem(item)} deleteItem={()=>deleteItem(item)}/>
      ))}
    </div>
  );
}

/*function EnemyMessage */
function ChatItem({ item, toggleItem, deleteItem }) {
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

      <input type="checkbox" checked={item.done} className="message-checkbox" onClick={toggleItem}></input>
      <button onClick={deleteItem}>x</button>

    </div>
  );
}
