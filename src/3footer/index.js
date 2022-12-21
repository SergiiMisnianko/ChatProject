import HouseIcon from '@mui/icons-material/House';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';

function Footer() {
    return (
        <div className="footer">
            <div class="menu">
                <ul>
                    <li>
                        <a href="http://www.google.co.uk">
                        <HouseIcon color="cyan"/>
                        </a>
                    </li>
                    <li>
                        <NotificationsActiveIcon color="cyan"/>
                    </li>
                    <li>
                        <AddCircleOutlineIcon color="cyan"/>
                    </li>
                    <li>
                        <PhoneIcon color="cyan"/>
                    </li>
                    <li>
                        <GroupIcon color="cyan"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export { Footer }











/*
import { usersarr } from "../database/index"



function InputMessage() {
    return (
        <div className="messageWrapper">
           
            <img src="https://vraki.net/sites/default/files/mood/29_9.jpg" alt="avatar" className="avatar"></img>;

            <textarea name="mymessage" className="inMessage" autofocus placeholder="I'm broadcasting:"></textarea>;

            <button type="submit" className="buttonSend" value="Submit">Send message</button>;

        </div>
    );
}
*/