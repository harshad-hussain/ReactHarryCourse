import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpCLick = () => {
    // console.log(text);
    let newtext = text.toUpperCase();
    props.showalert("Converted to Uppercase","success")
    setText(newtext)
  };
  const handleErase = () =>  {
    let newtext = text.toLowerCase();
    props.showalert("Converted to lowercase","success")
    setText(newtext)
  }

   const handleClear =()=>{
    let newtext ='';
    props.showalert("Everything has been cleared","success")
    setText(newtext)
   }
  const handleOnChange = (event) => {
    // console.log("the onchange was clicked");
    setText(event.target.value)
  };
  const [text, setText] = useState("enter text here");
  return (
    <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 >{props.heading}</h1>
        <textarea 
          className="form-control"
          value={text}
          onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
          id="mybox"
          rows="9" 
        ></textarea>
     
      <button className="btn btn-primary mx-1" onClick={handleUpCLick}  style={{color: props.mode==='dark'?'white':'black'}}>
        Convert to Uppercase
      </button>
      <button className=" btn btn-info mx-1"  onClick={handleErase}   style={{color: props.mode==='dark'?'white':'black'}}> To Lowercase</button>
      <button className="btn btn-warning mx-1" onClick={handleClear}  style={{color: props.mode==='dark'?'white':'black'}}>
          Clear 
      </button>
        <h2>Preview</h2>
        <p>{text.length>0?text:'enter something in textbox above to preview it here! '}</p>
    </div>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
