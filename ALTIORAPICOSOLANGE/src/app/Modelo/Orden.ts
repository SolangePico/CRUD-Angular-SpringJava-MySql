import { Articulo } from "./Articulo";

export class Orden {
    codeOrden?: number;
    numeroOrden: String;
    codeClienteOrden: number;
    fechaOrden?: Date;
    detalles: Articulo[];
}