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

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name = "topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name = "bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image ⛰️
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt = "pic" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}