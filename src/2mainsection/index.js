import { LeftSidebar } from "../4_left_sidebar";
import { RightSidebar } from "../5_right_sidebar";
import { usersarr } from "../database/index";

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

function MainSection() {
  return (
    <div className="main">
      <h1>MAIN SECTION</h1>;
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
