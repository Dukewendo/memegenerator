import React from "react";
import "./Form.css";


export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Clicked!")
  }
  
    return (
    <form onSubmit={handleSubmit} className="page--form">
      <label>
        <input type="text" id="form--first"></input>
      </label>

      <label>
        <input type="text" id="form--second"></input>
      </label>
      <button type="submit" className="form--button">
        Generate new image
      </button>
    </form>
  );
}
