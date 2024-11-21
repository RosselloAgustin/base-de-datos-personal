import React from 'react'

const Body = () => {
  return (

//IMPORTANTE: Esto lo ponemos de forma temporal ya que despues la idea es crear un componente Button que tenga su propia logica y reutilicemos el diseño y las rutas dinamicas del button para no tener que andar copiando y pegando muchas cosas similares

    <div className='w-full h-[70vh] bg-verdeFondo '>
      <div className='w-full flex justify-evenly pt-28' >
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Calendario</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Finanzas</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Salud</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Passwords</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Objetivos</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Anotaciones</button>
      </div>
       
      <div className='w-full flex justify-evenly mt-20' >
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Red de Contactos</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Hogar y Organización</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Educación y Aprendizaje</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Hobbies</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Tecnología</button>
        <button className="bg-verde8 hover:bg-verde9 transition-all text-grisClaro text-4xl border border-black hover:shadow-2xl shadow-black rounded-lg w-60 h-40">Viajes</button>
      </div>

      {/* 
          Estaria bueno agregar Recetas, un Stock de lo que hay en la casa (por ejemplo si hay 3 paquetes de arroz, 2 paquetes de azucar, etc)
          Tambien estaria bueno un listado de compras
      */}
        
    </div>
  )
}

export default Body