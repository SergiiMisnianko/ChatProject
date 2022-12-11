import "./styles.css";
import { Header } from "./1header/index";
import { Main } from "./2mainsection/index";
import{Footer} from "./3footer/index";
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
      <Header />
      <Main />;
      <Footer />;
    </div>
  );
}
