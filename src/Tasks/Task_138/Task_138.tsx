import { useRef, useState } from "react";

export const Task_138 = () => {
  const [loginControl, setLoginControl] = useState({
    name: "",
    password: "",
  });
  const loginRef = useRef({
    name: "",
    password: "",
  });
  console.log("render");

  const handleLoginFormControl = (event) => {
    const { id, value } = event.target;
    setLoginControl((prev) => ({ ...prev, [id]: value }));
  };

  const handleLoginFormNotControl = (event) => {
    const { name, value } = event.target;
    loginRef.current[name] = value;
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(loginControl);
    console.log(loginRef.current);
  };

  return (
    <div className="App">
      <h1>Control</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input id="name" onChange={handleLoginFormControl} />
        <label htmlFor="passwor">Password:</label>
        <input id="password" onChange={handleLoginFormControl} />
        <h1>Not Control</h1>
        <label htmlFor="nameNotControl">Name:</label>
        <input
          id="nameNotControl"
          name="name"
          onChange={handleLoginFormNotControl}
        />
        <label htmlFor="passwordNotControl">Password:</label>
        <input
          id="passwordNotControl"
          name="password"
          onChange={handleLoginFormNotControl}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
