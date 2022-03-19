import React from "react";
import memesData from "../memesData";

export default function Meme() {
    // const [memeImage, setImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    // const [topText, setTopText] = React.useState("")
    // const [bottomText, setBottomText] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })
    const [allMemeImages, setAllMemeImage] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image ⛰️
                </button>
            </div>
            <img src = {meme.randomImage} alt = "pic" className="meme--image" />
        </main>
    )
}