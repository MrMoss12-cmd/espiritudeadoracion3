export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Espíritu de Adoración</h3>
            <p className="text-gray-300">
              Transformando vidas a través de la adoración y la palabra de Dios.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios de Servicio</h3>
            <ul className="text-gray-300">
              <li>Domingo: 10:00 AM - 12:00 PM</li>
              <li>Miércoles: 7:00 PM - 9:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="text-gray-300">
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: contacto@iglesia.com</li>
              <li>Dirección: Tu dirección aquí</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-600">

          <p className="text-gray-300">© 2024 Espíritu de Adoración. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}