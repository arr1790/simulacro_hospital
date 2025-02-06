import Plantas from "@/components/plantas/Lista";
import { Suspense } from "react";
import BotonAtras from "@/components/botonAtras";
export default function PlantasPage() {
    return (
        <div>
            
            <Suspense fallback={"Obteniendo plantas ..."}>
                <Plantas />
                <BotonAtras />
            </Suspense>
        </div>
    );
}