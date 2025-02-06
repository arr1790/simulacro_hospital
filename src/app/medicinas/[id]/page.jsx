import Medicina   from "@/components/medicinas/Item";
import { Suspense } from "react";

async function PaginaMedicina({ params, searchParams }) {
    const { id } = await params
    return (
        <div>
            <h1>DATOS DEL MEDICAMENTO</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Medicina id={id} />
                
             
            </Suspense>
        </div>
    )
}
export default PaginaMedicina;