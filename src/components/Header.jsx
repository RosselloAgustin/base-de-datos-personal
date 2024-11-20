import React from 'react'

const Header = () => {
  return (
    <div className='w-screen h-[20vh] flex justify-center items-center bg-verde9'>
      <div>
        <h1 className="text-6xl text-center text-grisClaro">¡Hola "NombreUsuario"!</h1>
        <h4 className='text-center text-grisClaro mt-5 w-[600px] ' >Una base de datos personal en la que podes organizar tu vida. Está pensada para ser usada como mando central e ir redireccionando según nuestras necesidades.</h4>
      </div>

    </div>
  )
}

export default Header