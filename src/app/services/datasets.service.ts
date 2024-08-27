import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datasets } from './types';
import { pentavalent } from './types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasetsService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  
  getDatasets(id: number): Observable<JSON> {
   return this.http.get<JSON>(`${this.baseUrl}/datasets/${id}`);
   }
}
