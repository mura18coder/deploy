import React from 'react'
import CardExtendida from './components/CardExtendida/CardExtendida'
import Inicio from './components/Inicio/Inicio'
import Proyectos from './components/Proyectos/Proyectos'
import ContactForm from './components/ContactForm/ContactForm'
// import LogoGlobe from '/globe.svg'

export default function page() {
  return (
    <main className='flex flex-col min-h-screen w-full'>

      <Inicio />

      <Proyectos />

      <ContactForm />

    </main>
  )
}