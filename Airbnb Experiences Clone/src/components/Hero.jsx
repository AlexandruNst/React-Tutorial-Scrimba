import heroImage from "../assets/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroImage} alt="Photo grid" />
            <h1>Online Experiences</h1>
            <h2>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </h2>
        </section>
    )
}