import trollFace from "../assets/troll-face.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar--left">
                <img src={trollFace} alt="Troll Face" />
                <h1>Meme Generator</h1>
            </div>
            <div className="navbar--right">
                <h3>React Course - Project 3</h3>
            </div>
        </nav>
    )
}