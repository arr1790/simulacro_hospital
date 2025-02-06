import { obtenerMedicinas } from "@/lib/data";
import Link from "next/link";


async function Medicinas() {
  const medicinas = await obtenerMedicinas();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
        Lista de Medicinas
      </h2>
      <ul className="flex flex-col items-center justify-center mt-10">
      {medicinas.map((medicina) => (
        <li 
          key={medicina.id} 
          className="bg-slate-200 rounded-lg p-4 shadow-md mb-4 w-full md:w-1/2 lg:w-1/3"
        >
          <h2 className="text-2xl font-bold mb-2">
            <Link href={`/medicinas/${medicina.id}`} className="hover:underline">
             Nombre de Medicamento: {medicina.nombre}
            </Link>
          </h2>
          <p className="text-gray-700 italic"> Via :{medicina.via}</p>
          
        </li>
      ))}
    </ul>
    </div>
  );
}
export default Medicinas;