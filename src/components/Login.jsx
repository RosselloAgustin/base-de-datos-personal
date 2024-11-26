import React, { useState } from "react";
// import { supabase } from "../supabaseClient";
import { supabase } from "../bdd.py";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    var x = loginExists(username, password);
    // Valida las credenciales (puedes conectarte a una API aquí)
    // if (username === "admin@gmail.com" && password === "1234") {
    if (x){
      onLogin(); // Llama a la función pasada desde App.jsx para cambiar el estado
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-verde0 flex-col">
      <h1 className='text-verde0-700'>¡Bienvenido!</h1>
      <div className='flex flex-row justify-center items-center'>
        <div className='imgBienvenidaLogin w-100'></div>
        {/* <div className="flex flex-col"> */}
          <form id="formLogin"onSubmit={handleLogin} className="space-y-4 flex flex-col">
            <label htmlFor="email" className="font-large">Email</label>
            <input type="email" name="email" id="email" placeholder='EMAIL@gmail.com' required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='rounded-lg'/>
            <label htmlFor="password" className="font-large">Password</label>
            <input type="password" name="password" id="password" placeholder='Password' required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='rounded-lg'/>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" name="btnEnv" id="btnEnv" className='btn-verde9'>Iniciar Sesión</button>
          </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Login