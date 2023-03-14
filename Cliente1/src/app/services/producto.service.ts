import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '@components/models/producto';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api'


  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.url + "/obtener-product")
  }

  postProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url + "/create-product", producto)
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(this.url + "/delete-product/" + id)
  }

  getProducto(id: string): Observable<any> {
    return this.http.get(this.url + "/obtener-product/" + id)
  }
  putProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + "/modify-producto/" + id, producto)
  }
}
