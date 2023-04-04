import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductRequest, ProductResponse } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url=environment.BACKEND_URL;
  public api={product:`${this.url}/product`}
  getAll():Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>(this.api.product)
  }
  add(info:ProductRequest):Observable<ProductResponse>{
    return this.http.post<ProductResponse>(this.api.product,info)
  }
  delete(id:number){
    return this.http.delete(`${this.api.product}/${id}`)
  }
  edit(info:ProductRequest, id:number){
    return this.http.patch(`${this.api.product}/${id}`,info)
  }
  constructor(
    public http:HttpClient
  ) { }
}
