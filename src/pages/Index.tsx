import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProjectDetail from '../components/ProjectDetail';
import { useState } from 'react';
import Footer from '../components/Footer';
// import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "E-commerce",
    description: "Una plataforma de comercio electrónico completa con carrito de compras, pagos y moderna.",
    technologies: ["React", "Node.js", "Firebase", "Tailwind"],
    image: '/images/ecomerce_prueba.png',
    video: '/videos/video_Ecomerce.mkv'
  },
  {
    id: 2,
    title: "Chat en tiempo real",
    description: "Aplicación para gestionar tareas y proyectos con características de colaboración en tiempo real.",
    technologies: ["React", "Firebase", "Javasrcript"],
    image: '/images/image-chat.png',
    video: "/videos/video chat-react.mkv"
  },
  {
    id: 3,
    title: "Catalogo de desayunos",
    description: "Panel de control interactivo para visualizar datos empresariales y métricas clave.",
    technologies: ["React", "D3.js", "Node.js"],
    image: '/images/desayunos_image.jpg',
    video: "/videos/Desayunos-app.mkv"
  },
  {
    id: 4,
    title: "Buscador de gif",
    description: "Plataforma social con funciones de publicación, comentarios y mensajería en tiempo real.",
    technologies: ["React", "Socket.io", "MongoDB"],
    image: '/images/Gif-search.gif',
    video: "/videos/gif-search.mp4.mkv"
  },
  {
    id: 5,
    title: "App de Clima",
    description: "Aplicación del clima con pronósticos detallados y alertas meteorológicas.",
    technologies: ["React", "OpenWeather API", "TypeScript"],
    image: '/images/App-clima.png',
    video: "https://example.com/videos/weather-demo.mp4"
  },
  {
    id: 6,
    title: "Dashboard Analítico",
    description: "Panel de control interactivo para visualizar datos empresariales y métricas clave.",
    technologies: ["React", "D3.js", "Node.js"],
    image: '/images/analisis.jpg',
    video: "/videos/Dashboard-analitico.mkv"
  }
];

const technologies = [
  { name: "JavaScript", image: "/images/javascript.png" },
  { name: "React", image: "/images/react-logo.jpg" },
  { name: "Tailwind CSS", image: "/images/tailwind-logo.png" },
  { name: "Next.js", image: "/images/nextjs-logo.jpg" },
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <div className="min-h-screen">
      {/* Fondo con gradiente */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-gray-200 to-green-100 blur-xl h-full w-full"></div>
      
      <Navbar />

      {/* Introduccionn */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display mb-6">
            Desarrollador Frontend
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformando ideas en experiencias digitales extraordinarias
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/AndresDelac" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/hugo-andres-de-la-cruz-oyola-0b9b20289/" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 md:pr-8 mt-8 md:mt-0">
              <h2 className="text-3xl font-display mb-8 text-center">Sobre Mí</h2>
              <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <p className="text-2xl text-gray-700 leading-relaxed">
                    Soy un desarrollador frontend apasionado por crear experiencias web únicas, interactivas y centradas en el usuario. <br />
                    Me enfoco en combinar un diseño atractivo con un código limpio y eficiente para lograr interfaces intuitivas que se adaptan a cualquier dispositivo.
                    Disfruto transformar ideas en productos digitales funcionales que no solo se ven bien, sino que también ofrecen una excelente experiencia de uso.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                    src="/images/foto sin fondo.jpg" 
                    alt="Desarrollador Frontend"
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>
          </div>
        </section>

      {/* Seccion de proyectos */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display mb-8 text-center">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white/40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105"
                >
                <div className="h-48 bg-gray-200"><img src={project.image} className="w-full h-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-700 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-display mb-8 text-center">Tecnologías</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.map((tech) => (
                  <div key={tech.name} className="bg-white/40 backdrop-blur-sm rounded-lg p-2 text-center shadow-lg flex flex-col items-center">
                    <img src={tech.image} alt={tech.name} className="w-full h-full object-cover" />
                    <span className="text-lg font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
      </section>
      
      <section>
      <Footer />
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Index;
