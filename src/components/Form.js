import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied to Clipboard!", "success");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className='form-label'>Example textarea</label> */}
                    <textarea className="form-control" value={text} id='myBox' rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='dark'?'white':'#042743'}}></textarea>
                    <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={clearText}>Clear</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={handleCopyText}>Copy Text</button>
                    <button className='btn btn-primary my-2 mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2 className='card-title'>Your text summary</h2>
                <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the text box above to preview in here"}</p>
            </div>
        </>
    )
}
