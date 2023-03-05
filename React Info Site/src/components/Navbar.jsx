import logo from "../assets/react-icon-small.png"

export default function Navbar() {
    return (
        <>
            <nav className="nav">
                <div className="left-side">
                    <img src={logo} alt="react logo" />
                    <h3>ReactFacts</h3>
                </div>
                <div className="right-side">
                    <p>React Course - Project 1</p>
                </div>
            </nav>
        </>
    )
}