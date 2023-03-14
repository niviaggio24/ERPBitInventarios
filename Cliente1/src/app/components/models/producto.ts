export class Producto {
    _id?: number;
    modelo: string;
    fabricante: string;
    precio: number;
    rutaImg: string;
    asignadoA: String;
    estado: boolean;
    tock: String;
    cedula: Number;


    constructor(modelo: string, fabricante: string, precio: number, rutaImg: string, asignadoA: String, estado: boolean, tock: String, cedula: Number) {
      this.modelo = modelo;
      this.fabricante = fabricante;
      this.precio = precio;
      this.rutaImg = rutaImg;
      this.asignadoA = asignadoA;
      this.estado = estado;
      this.tock = tock;
      this.cedula = cedula;
    }
  }
