
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md z-50 shadow-sm py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div>
            <h3 className="text-2xl font-semibold mb-4">Desayunos Deliciosos</h3>
            <p className="text-gray-700">
              Hacemos tus mañanas especiales con desayunos preparados con amor.
            </p>
          </div> */}
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
            <div className="flex items-center mb-3">
              <Phone className="w-5 h-5 mr-2" />
              <span>(+57) 312 273 5999</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>hugoandres2205@gmail.com</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="hover:text-blue-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link to="https://instagram.com" className="hover:text-pink-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link to="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Portafolio Hugo Andres De la Cruz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;