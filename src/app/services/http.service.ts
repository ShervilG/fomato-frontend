import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from '../models/ItemModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  public getItemData(url: string, params: any, headers: any): Observable<Array<ItemModel>> {
    const finalHeaders = {...headers};
    const finalParams = {...params};
    const options = {
      headers: finalHeaders,
      params: finalParams
    };
    return this.http.get<Array<ItemModel>>(url, options);
  }
}
