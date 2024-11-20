import React from 'react'

const Footer = () => {
  return (
    <section className='w-full h-[10vh] bg-verde9 flex justify-between px-1 '>
        <div className='w-48 h-full border-l-2 border-r-2 border-verde8 text-grisClaro'>
            <ul className='list-none text-center' >
                <li>Mi Perfil</li>
                <li>Historial de Actividad</li>
                <li>Estadísticas Personalesl</li>
            </ul>
        </div>

        <div className='w-96 h-full bg-black  text-grisClaro'>
            {/* Acá me gustaría implementar el componente importado <Link/>, que es la forma correcta de utilizar links y sistemas de rutas en React */}
            <ul className='list-none text-center' >
                <li className='hover:text-naranjaCalido hover:bg-verde8 transition-all cursor-pointer' >Logro y Progreso</li>
                <li className='hover:text-naranjaCalido hover:bg-verde8 transition-all cursor-pointer' >Desafío Semanal</li>
                <li className='hover:text-naranjaCalido hover:bg-verde8 transition-all cursor-pointer' >Mochila o Inventario virtual</li>
                <li className='hover:text-naranjaCalido hover:bg-verde8 transition-all cursor-pointer' >Objetivos por grupos</li>
            </ul>
        </div>

        <div className='w-28 h-full border-l-2 border-r-2 border-verde8 text-grisClaro'>Log Out</div>    
    </section>
  )
}

export default Footer