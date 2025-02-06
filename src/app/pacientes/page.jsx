import Pacientes from "@/components/pacientes/Lista";
import { Suspense } from "react";
import BotonAtras from "@/components/botonAtras";
export default function PacientesPage() {
    return (
        <div>
            
            <Suspense fallback={"Obteniendo pacientes ..."}>
                <Pacientes />
                <BotonAtras />
            </Suspense>
        </div>
    );
}