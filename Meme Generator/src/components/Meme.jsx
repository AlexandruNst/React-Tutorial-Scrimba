import { useState } from "react";
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)


    function getMemeImage() {
        const memes = allMemeImages.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)]
        setMeme(prevMeme => ({ ...prevMeme, randomImage: randomMeme.url }));
    }

    return (
        <section className="meme">
            <div className="form" action="">
                <div className="meme--inputs">
                    <input type="text" name="topText" id="topText" placeholder="Top text" />
                    <input type="text" name="bottomText" id="bottomText" placeholder="Bottom text" />
                </div >
                <button type="submit" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme--img--wrapper">
                <img className="meme--img" src={meme.randomImage} alt="Meme Image" />
            </div>
        </section>
    )
}