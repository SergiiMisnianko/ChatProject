import { usersarr } from "../database/index"

function InputMessage() {
    return (
        <div className="messageWrapper">
            <img src="https://vraki.net/sites/default/files/mood/29_9.jpg" alt="avatar" className="avatar">
            </img>;

            <textarea name="mymessage" className="inMessage" autofocus placeholder="I'm broadcasting:">
            </textarea>;

            <button type="submit" className="buttonSend" value="Submit">
                Send message
            </button>;

        </div>
    );
}

function Footer() {
    return (
        <div className="footerWrapper">
            <InputMessage />;
        </div>
    );
}

export { Footer }