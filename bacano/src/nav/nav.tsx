import './nav.css'

function Nav(){
    return(
        <div className="box">
            <div className="left">
                <a href="/">Home</a>
            </div>
            <div className="right">
                <a href="/elements">UI elements</a>
                <a href="/hooks">Hooks</a>
                <a href="/name">Name</a>
                <a href="/context">Context</a>
            </div>
        </div>
    )
}

export default Nav