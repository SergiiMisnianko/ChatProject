import "./styles.css";
/*import "./normalise.css";*/

export default function App() {
  return (
    <div className="App">
      <Chat />;
    </div>
  );
}

function Chat() {
  return (
    <div className="parent">
      <Header />;
      <Main />;
      <Footer />;
    </div>
  );
}

function Header() {
  return (
    <div className="head">
      <h1 className="shine">"STARCHAT"</h1>
      <Authorization />;
    </div>
  );
}

function Authorization() {
  return (
    <div className="autor">
      <button type="button" className="signin">
        sign in
      </button>;
      <button type="button" className="sigout">
        sign out
      </button>;
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <h1>MAIN SECTION</h1>;
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <InputMessage />;
    </div>
  );
}

function InputMessage() {
  return (
    <div className="messageWrapper">
      <img
        src="https://vraki.net/sites/default/files/inline/images/1_102.jpg"
        alt="avatar"
        className="avatar"
      ></img>
      ;<textarea className="inMessage"></textarea>;
      <button
        type="image"
        className="buttonSend"
        src="https://img.freepik.com/premium-vector/realistic-blue-ufo_118813-3084.jpg"
        alt="send the message"
      ></button>
      ;
    </div>
  );
}