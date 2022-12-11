import { Sidebar } from "../4sidebar";
import { usersarr } from "../database/data";

/*
export function ContactItem({ item }: IProps): JSX.Element {
  return (
    <div className="contact">
      <img src={item.avatar} alt="" />
      <div className="info">
        <b className="name">{item.name}</b>
        <small className="phone">Phone: {item.phone}</small>
      </div>
    </div>
  );
}
*/


function sendedMessage(usersarr) {
  return (
    <div className="sendedMessage">
      <img
        src={usersarr.avatar}
        alt="avatar"
        className="avatar"
      ></img>
      <p>{usersarr.post}</p>
    </div>
  );
}

function Main() {
  return (
    <div className="mainwrapper">
      <Sidebar />
      <div className="main">
        <h1>MAIN SECTION</h1>;
      </div>
    </div>
  );
}

export { Main }
