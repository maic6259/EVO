import React from 'react';

const Footer = () => {
  return (
    // Componente Footer para el pie de página de la aplicación
    <footer className="bg-gray-800 py-8"> {/* Establece el color de fondo y el padding */}
      <div className="container mx-auto px-4"> {/* Contenedor centrado y con padding horizontal */}
        <div className="flex flex-wrap items-center justify-between"> {/* Utiliza flexbox para distribuir elementos en una fila */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            {/* Sección de Enlaces útiles */}
            <h2 className="text-white text-lg font-semibold mb-2">Agrolivery</h2>
            <ul className="flex text-gray-400"> {/* Utiliza la clase 'flex' para hacer que los elementos sean flexibles */}
              <li className="mr-4"> {/* Añade margen derecho para separar los enlaces */}
                <a href="#" className="hover:text-gray-300">Inicio</a> {/* Enlace con efecto hover */}
              </li>
              <li className="mr-4"> {/* Añade margen derecho para separar los enlaces */}
                <a href="#" className="hover:text-gray-300">Servicios</a> {/* Enlace con efecto hover */}
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Acerca de nosotros</a> {/* Enlace con efecto hover */}
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            {/* Sección de Información de contacto */}
            <h2 className="text-white text-lg font-semibold mb-2">Contacto</h2>
            <p className="text-gray-400">Dirección: Calle Principal, Ciudad</p>
            <p className="text-gray-400">Correo: info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporta el componente Footer para que pueda ser utilizado en otros lugares
