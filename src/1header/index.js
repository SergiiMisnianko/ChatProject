import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return (
        <div className="chat-head">
            <ChatName />
            <SearchForm />
        </div>
    );
}

export { Header }


function SearchForm() {
    return (
        <form action="">
            <div className="form_sec">
                <div className="icon">
                    <SearchIcon color="cyan"/>
                </div>
                <input type="text" placeholder="Search for messages" />
            </div>

            <div className="avatar">
                <img src="https://vraki.net/sites/default/files/mood/29_9.jpg" alt=""></img>
            </div>
        </form>
    );
}

function ChatName() {
    return (
        <div>
            <h1 className="shine">"STARCHAT"</h1>
        </div>
    )
}
