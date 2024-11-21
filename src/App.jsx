import React, { useState } from "react";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

// Vamos a estar poniendo los componentes como si fueran bloques que caen en esta pagina principal "App.jsx. Cada componente tendra su propia autonomia y funcionalidades, que tambien pueden ser derivadas a otros subcomponentes"
  return (
    <>
      {isAuthenticated ? (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}

export default App
