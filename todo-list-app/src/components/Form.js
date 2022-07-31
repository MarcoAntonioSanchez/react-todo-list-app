// Importando librerias de react para el componente
// Adding userState to the import statement to set a hook on props
import React, { useState } from "react";

function Form(props) {
  // Declaring the const props as an array to show and update name prop
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    if (name == "") {
      alert("Can't be an empty input, type something");
    } else {
      e.preventDefault();
      props.addTask(name);
      setName("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-weapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
