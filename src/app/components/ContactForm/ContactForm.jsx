"use client";
import { useState } from "react";
import { Mail, MapPin, Share2, Send } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "Desarrollo Web",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", projectType: "Desarrollo Web", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contacto" className="min-h-screen bg-[#050c0f] py-20 px-6 sm:px-12 flex items-center justify-center font-sans" id="contacto">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Information */}
                <div className="flex flex-col gap-8">
                    <div>
                        <span className="text-cyan-400 text-sm font-bold tracking-wider uppercase mb-4 block">
                            Contacto
                        </span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                            Iniciemos algo <br />
                            <span className="text-[#3b82f6]">grande</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            Estamos listos para nuevos retos. Cuéntanos sobre tu proyecto y descubramos cómo podemos ayudarte a escalar.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 mt-4">
                        {/* Contact Items */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#0a161f] border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Envíanos un correo</p>
                                <a href="mailto:deploy.coders@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <p className="hover:text-cyan-400 transition-all ">
                                        deploy.coders@gmail.com
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#0a161f] border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Visítanos</p>
                                <a href="https://maps.app.goo.gl/sXoeJzncf9C8bcbe7" target="_blank" rel="noopener noreferrer">
                                    <p className="hover:text-cyan-400 transition-all ">
                                        Acarigua - Portuguesa
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#0a161f] border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                                <Share2 size={20} />
                            </div>
                            <div>
                                <p className="text-white font-medium text-slate-400 text-sm mb-1">Síguenos</p>
                                <a href="https://www.instagram.com/deploy.coders/" target="_blank" rel="noopener noreferrer">
                                    <p className="hover:text-cyan-400 transition-all ">
                                        Instagram
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Availability Banner */}
                    <div className="mt-8 bg-[#0a161f] border border-slate-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                            <span className="text-white text-sm font-bold tracking-widest uppercase">
                                Disponibilidad
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Actualmente aceptando nuevos proyectos, agenda una llamada exploratoria hoy.
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-[#0a161f]/50 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <div>
                            <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                                className="w-full bg-[#111f28] border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                                Correo electrónico corporativo
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@company.com"
                                required
                                className="w-full bg-[#111f28] border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="projectType" className="block text-slate-300 text-sm font-medium mb-2">
                                Tipo de proyecto
                            </label>
                            <div className="relative">
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full bg-[#111f28] border border-slate-700/50 rounded-xl px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center',
                                        backgroundSize: '1.25rem'
                                    }}
                                >
                                    <option value="Desarrollo Web">Desarrollo Web</option>
                                    <option value="App Móvil">App Móvil</option>
                                    <option value="Automatización">Automatización</option>
                                    <option value="Bot">Bot</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                                Cuéntanos tu idea
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Breve descripción de los objetivos del proyecto..."
                                required
                                className="w-full bg-[#111f28] border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all h-32 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full bg-[#2094f3] hover:bg-[#3b82f6] text-black font-bold text-base rounded-xl px-6 py-4 mt-2 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "Enviando..." : "Enviar Propuesta"}
                            {status !== "loading" && <Send size={20} className="stroke-[2.5]" />}
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 text-sm text-center">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
}
