import React from 'react'
import CardExtendida from './components/CardExtendida/CardExtendida'
import Inicio from './components/Inicio/Inicio'
import Proyectos from './components/Proyectos/Proyectos'
// import LogoGlobe from '/globe.svg'

export default function page() {
  return (
    <main className='flex flex-col items-center justify-center gap-10 py-20'>
      
      <Inicio/>

      <Proyectos/>

    </main>
  )
}