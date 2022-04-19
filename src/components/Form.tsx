import React, { useState } from "react";

const Form = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = enteredInput.trim() !== "";
  const formvalidate = !isValid && touched;

  let formIsValid = false;
  if(isValid){
    formIsValid = true;
  }

  const inputChangeHandler = (event: any) => {
    setEnteredInput(event.target.value);
  };

  const focusChangeHandler = () => {
    setTouched(true);
  };
  const submitChangeHandler = (event: any) => {
    event.preventDefault();
    setTouched(true);
    if (enteredInput.trim() === "") {
      return;
    }

    setEnteredInput("");
    setTouched(false);
  };

  return (
    <form onSubmit={submitChangeHandler}>
      <input
        type="text"
        onChange={inputChangeHandler}
        value={enteredInput}
        onBlur={focusChangeHandler}
      />
      <br></br>
      {formvalidate && <p>name is mandorty</p>}
      <button disabled={!formIsValid}>Submit</button>
    </form>
  );
};

export default Form;
