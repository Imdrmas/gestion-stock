import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommandDto, ProductDto} from '../model/rest';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  findCommandById(id: number): Observable<CommandDto> {
    return this.http.get<CommandDto>(`${this.url}/findCommandById/${id}`);
  }
  saveCommand(command: CommandDto, idUser: number): Observable<any> {
    return this.http.post<any>(`${this.url}/saveCommand/${idUser}`, command);
  }
  updateCommand(command: CommandDto, id: number): Observable<CommandDto> {
    return this.http.put<CommandDto>(`${this.url}/updateCommand/${id}`, command);
  }
  deleteCommand(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/deleteCommand/${id}`);
  }
  saveProduct(product: ProductDto, idCommand: number): Observable<ProductDto> {
    return this.http.post<ProductDto>(`${this.url}/saveProduct/${idCommand}`, product);
  }
  findAllCommandForUser(idUser: number): Observable<CommandDto[]> {
    return this.http.get<CommandDto[]>(`${this.url}/findAllCommandForUser/${idUser}`);

  }
}
