import { Header } from "./1header/index";
import { ChatList, MessageForm} from "./2mainsection/index";
import { Footer } from "./3footer/index";

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
