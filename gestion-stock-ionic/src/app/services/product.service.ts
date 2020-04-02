import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from '../model/rest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  findProductById(id: number): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.url}/findProductById/${id}`);
  }
  updateProduct(product: ProductDto, id: number): Observable<ProductDto> {
    return this.http.put<ProductDto>(`${this.url}/updateProduct/${id}`, product);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/deleteProduct/${id}`);
  }
  productNameExists(idCommand: number, name: string): Observable<any>{
    return this.http.get<any>(`${this.url}/productNameExist/${idCommand}/name/${name}`);
  }
}
