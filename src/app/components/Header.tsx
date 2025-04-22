export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-4">

      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Espíritu de Adoración</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#" className="hover:text-gray-300">Nosotros</a></li>
            <li><a href="#" className="hover:text-gray-300">Ministerios</a></li>
            <li><a href="#" className="hover:text-gray-300">Eventos</a></li>
            <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}