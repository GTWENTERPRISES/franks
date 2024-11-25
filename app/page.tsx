"use client"
import { useState, useEffect } from "react";
import { 
  Music, Speaker, Users, ChevronRight, Calendar, Star,
  Mic, Music4, PartyPopper, Trophy, Instagram, Facebook,
  Twitter, Youtube, Play, Pause, Clock, MapPin, Mail,
  Phone, Heart
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import MusicPlayer from "./components/MusicPlayer";
import ServiceCard from "./components/ServiceCard";
import Link from "next/link";
import Image from "next/image";
import ServicesSection from "./components/ServiceCard";
import Formulario from "./components/form";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg py-4" : "bg-transparent py-6"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold tracking-tighter">DJ Frank</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Servicios", "Experiencia", "Testimonios", "Contacto"].map((item) => (
                <Link 
                  key={item}
                  className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors relative group"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="hidden md:flex text-yellow-400"
              >
                <Phone className="h-4 w-4 mr-2" />
                +593 96 949 5311
              </Button>
              <Link href="#contacto">
              <Button 
                className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
              >
                Reservar Ahora
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-60"
            poster="https://stlsevents.co.uk/wp-content/uploads/2024/01/Best-DJ-setups-for-different-events-1.jpg"
          >
            <source src="https://www.youtube.com/watch?v=RtDmwjkAD5s" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative pt-32 lg:pt-40 container mx-auto px-6 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 transition-colors">
                DJ Profesional en La Maná
              </Badge>
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-600">
                  Creando Momentos
                </span>
                <br />
                Inolvidables
              </h2>
              <p className="text-xl text-gray-300 max-w-xl">
                Más de 15 años transformando eventos en experiencias únicas con la mejor 
                música y ambiente para bodas, eventos corporativos y fiestas privadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contacto"><Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors">
                  Reservar Ahora <ChevronRight className="ml-2 h-4 w-4" />
                </Button></Link>
                
              </div>
              <div className="flex items-center space-x-8 pt-8">
                {["Instagram", "Facebook", "Youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {social === "Instagram" && <Instagram className="h-6 w-6" />}
                    {social === "Facebook" && <Facebook className="h-6 w-6" />}
                    {social === "Youtube" && <Youtube className="h-6 w-6" />}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                width={600}
                height={800}
                alt="DJ Frank in action"
                src="https://5.imimg.com/data5/SELLER/Default/2021/10/DE/BP/GA/62631245/d-j-event-organizer.jpg"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-black/90 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-4 rounded-full">
                    <Trophy className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Premio al Mejor DJ</p>
                    <p className="font-semibold">DJ Awards 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Animation */}
      <section id="experiencia" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400/5" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Eventos Realizados", icon: Calendar },
              { number: "50K+", label: "Personas Bailando", icon: Users },
              { number: "100%", label: "Clientes Satisfechos", icon: Heart },
              { number: "15+", label: "Años de Experiencia", icon: Trophy },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:bg-yellow-400/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                    {stat.icon && <stat.icon className="h-6 w-6 text-yellow-400" />}
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">{stat.number}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection/>

      {/* Equipment Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-yellow-400/10 text-yellow-400">
                Equipo Profesional
              </Badge>
              <h2 className="text-4xl font-bold">
                Tecnología de Última Generación
              </h2>
              <p className="text-gray-400">
                Utilizamos solo el mejor equipo del mercado para garantizar una 
                calidad de sonido excepcional y efectos visuales impresionantes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Pioneer CDJ-3000",
                  "Allen & Heath Xone:96",
                  "Martin Audio LineArray",
                  "Chauvet Professional",
                  "Pioneer DJM-900NXS2",
                  "RCF Subwoofers",
                  "Shure Microphones",
                  "Atmospheric FX"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <Music4 className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" variant="outline">
                Ver Especificaciones Técnicas
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://www.renuevo.es/img/cms/blog/XDJ-RX35990-scaled-w695-h523-backdrop%20bis.jpg",
                "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
                "https://djmag.es/wp-content/uploads/2021/09/best-dj-all-in-one-dj-systems-V3-hero.jpeg",
                "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
              ].map((src, index) => (
                <div
                  key={index}
                  className={`relative rounded-lg overflow-hidden ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                >
                  <Image
                    src={`${src}?auto=format&fit=crop&q=80`}
                    width={600}
                    height={400}
                    alt={`Equipment ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Recent Events Gallery */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-yellow-400/10 text-yellow-400">
              Galería
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Eventos Recientes</h2>
            <p className="text-gray-400">
              Revive los mejores momentos de nuestros últimos eventos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src="https://levelsproducciones.com/wp-content/uploads/2023/03/Fiestas-para-Matrimonios-scaled.jpg"
                  alt={`Event ${index + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white font-semibold">Wedding Party</p>
                    <p className="text-sm text-gray-300">La Maná, 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonios" className="py-24 bg-gradient-to-b from-black to-yellow-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-yellow-400/10 text-yellow-400">
              Testimonios
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-gray-400">
              Descubre por qué somos la opción preferida para eventos especiales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sara Martínez",
                role: "Novia",
                event: "Boda en Finca El Campillo",
                image: "/api/placeholder/64/64",
                text: "¡La mejor decisión para nuestra boda! Frank entendió perfectamente el ambiente que queríamos crear. La pista de baile estuvo llena toda la noche y nuestros invitados siguen hablando de lo increíble que fue la música."
              },
              {
                name: "Miguel Ángel López",
                role: "Director de Eventos",
                event: "Gala Empresarial Anual",
                image: "/api/placeholder/64/64",
                text: "Extremadamente profesional y con una capacidad única para leer el ambiente. La transición perfecta entre la cena formal y la fiesta fue magistral. Definitivamente nuestra primera opción para futuros eventos."
              },
              {
                name: "Laura García",
                role: "Cumpleañera",
                event: "Fiesta 30 Cumpleaños",
                image: "/api/placeholder/64/64",
                text: "Frank creó un ambiente increíble que todos amaron. Su selección musical fue perfecta y supo mantener la energía durante toda la noche. ¡No podría estar más feliz con el resultado!"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl relative group hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black p-2 rounded-full">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-yellow-400">{testimonial.event}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
            <Formulario/>
      {/* Footer */}
<footer className="py-16 bg-black border-t border-white/10">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Brand Column */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Music className="h-8 w-8 text-yellow-400" />
          <h1 className="text-2xl font-bold tracking-tighter">DJ Frank</h1>
        </div>
        <p className="text-gray-400 text-sm">
          Transformando eventos en experiencias inolvidables a través de la música desde 2009.
        </p>
        <div className="flex space-x-4">
          {[
            { icon: Instagram, href: "#" },
            { icon: Facebook, href: "#" },
            { icon: Youtube, href: "#" },
            { icon: Twitter, href: "#" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-yellow-400 transition-colors"
              aria-label={`Visit our ${social.icon.name}`}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
        <ul className="space-y-2">
          {[
            { name: "Servicios", href: "#servicios" },
       
            { name: "Experiencia", href: "#experiencia" },
            { name: "Testimonios", href: "#testimonios" },
            { name: "Contacto", href: "#contacto" }
          ].map((link, index) => (
            <li key={index}>
              <a 
                href={link.href}
                className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center space-x-1"
              >
                <ChevronRight className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contacto</h3>
        <ul className="space-y-3">
          {[
            { icon: MapPin, content: "Ecuador, La Maná" },
            { icon: Phone, content: "+593 96 949 5311", href: "tel:+593969495311" },
            { icon: Mail, content: "info@djfrank.es", href: "mailto:info@djfrank.es" }
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href || "#"}
                className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.content}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      
    </div>

    {/* Bottom Bar */}
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} DJ Frank. Todos los derechos reservados.
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-yellow-400 transition-colors"></a>
          <a href="#" className="hover:text-yellow-400 transition-colors"></a>
          <a href="#" className="hover:text-yellow-400 transition-colors"></a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}