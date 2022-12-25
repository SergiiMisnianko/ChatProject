import { Header } from "./ChatMainPage/MainPageHeader";
import { Footer, MessageForm } from "./ChatMainPage/MainPageFooter";
import { ChatList } from "./ChatMainPage/MainPageCenter";


export default function App() {
  return (
    <Chat />
  );
}

/* Lesson 27 57:48 */

function Chat() {
  const list = [
    { done: false, text: "Hello, Human!", avatar: "https://vraki.net/sites/default/files/inline/images/1_102.jpg", enemyname: "Robot-1", },
    { done: true, text: "Who do you call human?!!", avatar: "https://vraki.net/sites/default/files/inline/images/5_87.jpg", enemyname: "Robot-2", },
    { done: false, text: "The elimination team is already moving forward!", avatar: "https://vraki.net/sites/default/files/inline/images/14_74.jpg", enemyname: "Robot-3", },
    { done: true, text: "Hey! If there are true humans, we need one functioning for the museum!!!", avatar: "https://vraki.net/sites/default/files/inline/images/22_72.jpg", enemyname: "Robot-4", },
    { done: true, text: "What are you talking about? No one has seen humans for thousands of years!", avatar: "https://vraki.net/sites/default/files/inline/images/26_74.jpg", enemyname: "Robot-5", },
    { done: false, text: "Hello, Human!", avatar: "https://vraki.net/sites/default/files/inline/images/1_102.jpg", enemyname: "Robot-1", },
    { done: true, text: "Who do you call human?!!", avatar: "https://vraki.net/sites/default/files/inline/images/5_87.jpg", enemyname: "Robot-2", },
    { done: false, text: "The elimination team is already moving forward!", avatar: "https://vraki.net/sites/default/files/inline/images/14_74.jpg", enemyname: "Robot-3", },
    { done: true, text: "Hey! If there are true humans, we need one functioning for the museum!!!", avatar: "https://vraki.net/sites/default/files/inline/images/22_72.jpg", enemyname: "Robot-4", },
    { done: true, text: "What are you talking about? No one has seen humans for thousands of years!", avatar: "https://vraki.net/sites/default/files/inline/images/26_74.jpg", enemyname: "Robot-5", },
  ];


  return (
    <div className="Chat-Container">
      <div className="Chat-Wrapper">
        <Header />

        <div className="Chat-List">

          <scroll-container className="scroll-container">
            <ChatList list={list} />
          </scroll-container>

        </div>

        <MessageForm />
        <Footer />
      </div>
    </div>



  );
}