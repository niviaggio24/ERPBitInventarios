import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '@components/models/producto';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductoService } from '@services/producto.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {


  tituloComponente: string = 'Crear'
    productoForm: FormGroup
    regexNumero = /^[0-9]+$/;
    id: string | null

  constructor(private fb: FormBuilder, private _productoService: ProductoService, private router: Router, private idRoute: ActivatedRoute) {
    this.productoForm = this.fb.group({

      modelo: ['', Validators.required],
      fabricante: ['', Validators.required],
      precio: ['', Validators.required],
      rutaImg: ['', Validators.required],
      asignadoA: ['', Validators.required],
      estado: ['', Validators.required],
      tock: ['', Validators.required],
      cedula: ['', Validators.required],
    })
    this.id = this.idRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
  }

  agregarProducto() {
    console.log(this.productoForm);
    console.log(this.productoForm.get('producto')?.value)

    const PRODUCTO: Producto = {
      modelo: this.productoForm.get('modelo')?.value,
      fabricante: this.productoForm.get('fabricante')?.value,
      precio: this.productoForm.get('precio')?.value,
      rutaImg: this.productoForm.get('rutaImg')?.value,
      asignadoA: this.productoForm.get('asignadoA')?.value,
      estado: this.productoForm.get('estado')?.value,
      tock: this.productoForm.get('tock')?.value,
      cedula: this.productoForm.get('cedula')?.value
    }
    console.log(PRODUCTO)

    this._productoService.postProducto(PRODUCTO).subscribe(data => {
      this.router.navigate(['/']);
      Swal.fire({
        title: 'Exito!',
        text: 'el registro se creo correctamente',
        icon: 'success',
        confirmButtonText: 'vale'
      })
    }, error => {console.log(error)});
  }
}
