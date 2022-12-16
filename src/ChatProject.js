import { Header } from "./1header/index";
import { MainWrapper } from "./2mainsection/index";
import{Footer} from "./3footer/index";

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
      <Header />
      <MainWrapper />;
      <Footer />;
    </div>
  );
}
