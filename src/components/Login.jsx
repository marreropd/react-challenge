import React from "react";

function Login() {
  const sumbitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (email === "" || password === "") {
      console.log("los campos no pueden estar vacios");
    }
  };
  return (
    <>
      <h2>Ingreso</h2>
      <form onSubmit={sumbitHandler}>
        <label>
          <span>Correo Electronico</span>
          <br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña</span>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Login;
