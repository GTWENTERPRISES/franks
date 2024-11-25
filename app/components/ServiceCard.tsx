import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Music, Users, PartyPopper, ChevronRight, CheckCircle, Sparkles, LucideIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Feature {
  title: string;
  description: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  price: string;
  description: string;
  features: string[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

interface ServiceCardProps {
  service: Service;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, popular = false }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormStep(2);
    const API_URL = 'http://localhost:8000/api/reservas/';
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: formData.name,
        email: formData.email,
        telefono: formData.phone,
        fecha: formData.date,
        mensaje: formData.message
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => {
      setTimeout(() => {
        setFormStep(3);
      }, 1500);
      setTimeout(() => {
        setIsDialogOpen(false);
        setFormStep(1);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          message: ''
        });
      }, 3000);
    });
  };

  return (
    <>
      <div className="group relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="p-8 relative">
          {popular && (
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                POPULAR
              </div>
            </div>
          )}
          <div className="bg-yellow-400/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <service.icon className="h-8 w-8 text-yellow-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="text-yellow-400 font-bold mb-4">{service.price}</p>
          <p className="text-gray-400 mb-6">{service.description}</p>
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center text-gray-300">
                <ChevronRight className="h-4 w-4 text-yellow-400 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            onClick={() => setIsDialogOpen(true)}
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Reservar {service.title}
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-black to-black text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              {formStep === 1 && `Reservar ${service.title}`}
              {formStep === 2 && 'Procesando...'} 
              {formStep === 3 && '¡Reserva Confirmada!'}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {formStep === 1 && 'Complete los detalles para su reserva'}
              {formStep === 2 && 'Estamos procesando su solicitud'}
              {formStep === 3 && '¡Gracias por confiar en nosotros!'}
            </DialogDescription>
          </DialogHeader>

          {formStep === 1 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  className="bg-yellow-500 border-white/20 text-black placeholder:text-gray-500 border-0"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ejemplo@correo.com"
                    className="bg-yellow-500 border-white/20 text-black placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+593 600 000 000"
                    className="bg-yellow-500 border-white/20 text-black placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-white">Fecha Preferida</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="bg-yellow-500 border-white/20 text-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Mensaje (Opcional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detalles adicionales..."
                  className="h-24 bg-yellow-500 border-white/20 text-black placeholder:text-gray-500"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <DialogClose asChild>
                  <Button variant="outline" className="border-white/20 text-black hover:bg-black hover:text-white">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button 
                  type="submit" 
                  className="bg-yellow-500 text-black hover:bg-yellow-400"
                >
                  Confirmar Reserva
                </Button>
              </div>
            </form>
          )}

          {formStep === 2 && (
            <div className="py-12 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-gray-400">Procesando su reserva...</p>
            </div>
          )}

          {formStep === 3 && (
            <div className="py-12 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Reserva Confirmada!</h3>
              <p className="text-gray-400 text-center">
                Recibirás un email con los detalles de tu reserva
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};


const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: Music,
      title: "Bodas",
      price: "Desde €899",
      description: "Crea momentos mágicos con música perfectamente seleccionada para tu día especial",
      features: [
        "DJ profesional por 6 horas",
        "Equipo de sonido premium",
        "Iluminación personalizada",
        "Coordinación con planificador",
        "Lista de música personalizada",
        "Transiciones suaves entre ceremonias",
        "Sistema de backup completo",
        "Reunión de planificación previa"
      ]
    },
    {
      icon: Users,
      title: "Eventos Corporativos",
      price: "Desde €699",
      description: "Soluciones profesionales de sonido e iluminación para eventos empresariales",
      features: [
        "DJ profesional por 4 horas",
        "Sistema de sonido profesional",
        "Iluminación ambiental",
        "2 micrófonos inalámbricos",
        "Música corporativa selecta",
        "Soporte técnico continuo",
        "Montaje y desmontaje",
        "Seguro de responsabilidad civil"
      ]
    },
    {
      icon: PartyPopper,
      title: "Fiestas Privadas",
      price: "Desde €599",
      description: "La mejor música y ambiente para tu celebración especial",
      features: [
        "DJ profesional por 5 horas",
        "Equipo de sonido completo",
        "Luces LED programables",
        "Máquina de humo",
        "Requests en vivo",
        "Karaoke (opcional)",
        "Efectos especiales",
        "Biblioteca musical extensa"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-black to-yellow-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-yellow-400/10 text-yellow-400">
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Soluciones Profesionales Para Cada Evento
          </h2>
          <p className="text-gray-400">
            Ofrecemos paquetes personalizados que se adaptan a tus necesidades específicas,
            garantizando una experiencia musical única.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              popular={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;