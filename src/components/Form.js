import React from "react";
import "./memeData";
import "./Form.css";
import memeData from "./memeData";

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    const response = memeData.data.memes;
    const randomMeme = Math.floor(Math.random() * response.length);
    const { url } = response[randomMeme];
    console.log(url);
  }

  return (
    <form onSubmit={handleSubmit} className="page--form">
      <label className="first--input">
        <input
          type="text"
          placeholder="Top text"
          className="form--first"
        ></input>
      </label>

      <label className="second--input">
        <input
          type="text"
          placeholder="Bottom text"
          className="form--second"
        ></input>
      </label>
      <button type="submit" className="form--button">
        Generate new image
      </button>
    </form>
  );
}
