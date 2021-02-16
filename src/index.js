import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Room() {
//   const [value, setvalue] = useState(0);
//   function inc() {
//     setvalue(setvalue => {
//       return setvalue + 1;
//     })
//   }
//   function dec() {
//     setvalue(setvalue => {
//       return setvalue - 1;
//     })
//   }

//   return (
//     <div>
//       <button onClick={inc}> + </button>
//       <div>{value}</div>
//       <button onClick={dec}> - </button>
//     </div>
//   )
// }

// ReactDOM.render(<Room />, document.querySelector("#root"))

function Room() {
  const [value, setvalue] = useState(true);
  const birthness = value ? "Bright" : "Dark";

  //Ye function ek he button k liye hay jis say on off hoga
  // function abc1() {
  //   setvalue((previousValue) => !previousValue);
  // }

  //Ye do button say hoga function on off krnay k liye
  function abc1() {
    setvalue((previousValue) => {
      return previousValue = false}
      )
  }

  function abc2() {
    setvalue((previousValue) => {
      return previousValue = true}
      )
  }
  return (
    <div className={`room ${birthness}`}>
      <div>this room is {(value === true) ? "Bright" : "Dark"}</div>
      <button onClick={abc1}> ON </button>
      <button onClick={abc2}> OFF </button>
    </div>
  )
}

ReactDOM.render(<Room />,document.querySelector("#root"))

