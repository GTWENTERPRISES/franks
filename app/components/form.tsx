import React, { useState } from 'react';
import axios from 'axios';
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [tipoEvento, setTipoEvento] = useState('');
  const [fechaEvento, setFechaEvento] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(null);
  const [enviado, setEnviado] = useState(false); // Estado para controlar la visibilidad del mensaje

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/evento/', {
        nombre,
        email,
        tipo_evento: tipoEvento,
        fecha_evento: fechaEvento,
        mensaje,
      });
      console.log(response.data);
      setNombre('');
      setEmail('');
      setTipoEvento('');
      setFechaEvento('');
      setMensaje('');
      setEnviado(true); // Actualiza el estado para mostrar el mensaje
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {/* Enhanced Contact Section */}
      <section id="contacto" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Badge className="bg-yellow-400/10 text-yellow-400">
                Contacto
              </Badge>
              <h2 className="text-4xl font-bold">¿Listo para tu evento?</h2>
              <p className="text-gray-400 max-w-xl">
                Cuéntanos sobre tu evento y juntos crearemos una experiencia musical inolvidable.
                Responderemos a tu consulta en menos de 24 horas.
              </p>

              <div className="grid gap-6">
                {[/* ... */].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {/* ... */}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-400">Nombre</label>
                    <Input
                      className="mt-2 bg-white/5 border-white/10 focus:border-yellow-400"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Email</label>
                    <Input
                      className="mt-2 bg-white/5 border-white/10 focus:border-yellow-400"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Tipo de Evento</label>
                  <Input
                    className="mt-2 bg-white/5 border-white/10 focus:border-yellow-400"
                    value={tipoEvento}
                    onChange={(e) => setTipoEvento(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400">Fecha del Evento</label>
                  <Input
                    className="mt-2 bg-white/5 border-white/10 focus:border-yellow-400"
                    type="date"
                    value={fechaEvento}
                    onChange={(e) => setFechaEvento(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400">Mensaje</label>
                  <Textarea
                    className="mt-2 bg-white/5 border-white/10 focus:border-yellow-400"
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                  />
                </div>
                <Button
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                  type="submit"
                >
                  Enviar Mensaje
                </Button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {enviado && (
                  <p style={{ color: 'white' }}>
                    ¡Mensaje enviado con éxito! Gracias por contactarnos.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formulario;
