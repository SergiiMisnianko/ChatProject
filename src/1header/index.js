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

function Header() {
    return (
        <div className="head">
            <h1 className="shine">"STARCHAT"</h1>
            <Authorization />;
        </div>
    );
}

export {Header}
