import React from 'react'
import CardExtendida from './components/CardExtendida/CardExtendida'
import Inicio from './components/Inicio/Inicio'
import Servicios from './components/Servicios/Servicios'
import SobreNosotros from './components/SobreNosotros/SobreNosotros'
import Proyectos from './components/Proyectos/Proyectos'
import Banner from './components/Banner/Banner'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
// import LogoGlobe from '/globe.svg'

export default function page() {
  return (
    <main className='bg-[#0a161a] flex flex-col min-h-screen w-full pt-12'>

      <Inicio />

      <Servicios />

      <SobreNosotros />

      <Proyectos />

      <Banner />

      <ContactForm />

      <Footer />

    </main>
  )
}