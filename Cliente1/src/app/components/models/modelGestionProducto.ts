export class modelGestionProducto {
    _id?: string;
    fabricante: string
    precio: number
    rutaImg: string
    asignadoA: string
    estado: string
    tock: number
    cedula: string

    constructor(fabricante: string, precio: number, rutaImg: string, asignadoA: string, estado: string, tock: number, cedula: string) {

        this.fabricante = fabricante
        this.precio = precio
        this.rutaImg = rutaImg
        this.asignadoA = asignadoA
        this.estado = estado
        this.tock = tock
        this.cedula = cedula



     }


}


