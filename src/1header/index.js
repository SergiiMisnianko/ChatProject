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







/*
 


function Header() {
    return (
        <div className="chat-head">
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
            <button type="button" className="signout">
                sign out
            </button>;
        </div>
    );
}

*/