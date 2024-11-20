import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
// Vamos a estar poniendo los componentes como si fueran bloques que caen en esta pagina principal "App.jsx. Cada componente tendra su propia autonomia y funcionalidades, que tambien pueden ser derivadas a otros subcomponentes"
  return (
    <>
      <div>
        <Header />
        <Body />
        
        <Footer/>
      </div>
    </>
  )
}

export default App
