import React from "react";
import memesData from "../memesData";

export default function Meme() {
    let url

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        // const {url} = memesArray[randomNumber]
        console.log(url)
    }

    return (
        <main>
            <form className="form">
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
            </form>
        </main>
    )
}