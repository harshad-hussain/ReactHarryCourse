import React,{useState} from 'react'
import PropTypes from "prop-types";

export default function VariableCount(props) {
    const handleUpClick =() =>
    {
        let newvariable = VariableCount.length;
        console.log(newvariable);
        setVariableCount(newvariable);
    };
    const handleOnChange = (event) =>{
        setVariableCount(event.target.value);
    };
    const [VariableCount ,setVariableCount]= useState("Enter the variable here");
  return (
    <div>
        <h1> {props.heading}</h1>
      <div className="my-3">
  <textarea className="form-control"  value={VariableCount}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"  ></textarea>
</div>
<button className="btn btn-primary"  onClick={handleUpClick}>Name the count </button>
    </div>
  )
}
VariableCount.propTypes = {
    heading: PropTypes.string,
};