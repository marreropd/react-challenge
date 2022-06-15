import React from "react";

function Login() {
  return (
    <>
      <h2>Ingreso</h2>
      <form>
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
