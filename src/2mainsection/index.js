import { connect } from "react-redux";
import { LeftSidebar } from "../4_left_sidebar";
import { RightSidebar } from "../5_right_sidebar";
import { ListWrapper } from "../database/index"


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


function MiddleSection() {
  return (
    <div className="middle-section">
      <MessageItem1 />
      <MessageItem2 />
      <MessageItem3 />
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


export { MainWrapper }


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