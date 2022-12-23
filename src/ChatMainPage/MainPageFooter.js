import HouseIcon from '@mui/icons-material/House';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';

function Footer() {
    return (
        <div className="footer">
            <div className="menu">
                <ul>
                    <li >
                        <a href="http://www.google.co.uk" target="_blank" className="footer-link">
                            <HouseIcon />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.google.co.uk" target="_blank" className="footer-link">
                            <NotificationsActiveIcon color="cyan" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.google.co.uk" target="_blank" className="footer-link">
                            <AddCircleOutlineIcon color="cyan" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.google.co.uk" target="_blank" className="footer-link">
                            <PhoneIcon color="cyan" />
                        </a>
                    </li>
                    <li>
                        <a href="http://www.google.co.uk" target="_blank" className="footer-link">
                            <GroupIcon color="cyan" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export { Footer }