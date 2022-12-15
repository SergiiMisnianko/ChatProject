import { LeftSidebar } from "../4_left_sidebar";
import { RightSidebar } from "../5_right_sidebar";
import { ListWrapper } from "../database/index"


function MessageItem() {
  let list = [{name:"Message-0"},{name:"Message-1"},{name:"Message-2"}]
  
  return (
    <div className="inMessage">
      {<p>{list[0].name}</p>}
      {<p>{list[1].name}</p>}
    </div>
  );
}

function SendedMessage(list) {

  return (
    <li>{}</li>
  );
}

function MainSection() {
  return (
    <div className="main">
      <h1>MAIN SECTION</h1>;
      <MessageItem />
    </div>
  );
}

function MainWrapper() {
  return (
    <div className="mainwrapper">
      <LeftSidebar />
      <MainSection />
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