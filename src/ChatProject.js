import { Header } from "./ChatMainPage/MainPageHeader";
import { ChatList, MessageForm} from "./ChatMainPage/MainPageCenter";
import { Footer } from "./ChatMainPage/MainPageFooter";

export default function App() {
  return (
    <div className="Chat">
      <Chat />
    </div>
  );
}

function Chat() {
  return (
    <div className="Chat-Container">
      <div className="Chat-Wrapper">
        <Header />
        <ChatList />
        <MessageForm />
        <Footer />
      </div>
    </div>

  );
}
