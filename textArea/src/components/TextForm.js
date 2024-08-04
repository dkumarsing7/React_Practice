import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpper = () => {
        setText(text.toUpperCase());
    };

    const handleLower = () => {
        setText(text.toLowerCase());
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <div>
                <h2>{props.heading}</h2>
                <div className="mb-3 ">
                    <textarea className="form-control accordion" id="myBox" value={text} onChange={handleTextChange} rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpper} >UPPERCASE</button>
                <button className="btn btn-primary mx-1" onClick={handleLower} >lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>Words: {text.split(" ").length}</p>
                <p>Characters: {text.length}</p>
                <p>Sentence: {text.split(".").length}</p>
            </div>
        </>
    )
}
