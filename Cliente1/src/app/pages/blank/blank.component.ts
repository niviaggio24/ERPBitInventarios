import { Component, OnInit } from '@angular/core';
import { Producto } from '@components/models/producto';
import { ProductoService } from '@services/producto.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})

export class BlankComponent implements OnInit {
  listaProductos: any[] = [];
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos() {
    console.log('iniar obtener')
    this._productoService.getProductos().subscribe(data => {
      console.log(data)
      this.listaProductos = data.file
    }, err => console.log(err))
  }

  eliminarProducto(id: any) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar el producto?',
      text: "Esta accion no sera reversible",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._productoService.deleteProducto(id).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'Producto eliminado',
          })
          this.obtenerProductos()
        })

      }
    })
  }

}
