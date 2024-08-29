import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Tache from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private urlApi = "http://localhost:3000"
  constructor(private http: HttpClient) { }


  getTaches(): Observable<Tache[]>
  {
   return this.http.get<Tache[]>(`${this.urlApi}/taches`) 
  }

  getTache(id :number): Observable<Tache>
  {
    return this.http.get<Tache>(`${this.urlApi}/taches/${id}`) 
  }

  createTache(tache: Tache): Observable<Tache>
  {
    return this.http.post<Tache>(`${this.urlApi}/taches`,tache)
  }

  updateTache(tache :Tache): Observable<Tache>
  {
    return this.http.put<Tache>(`${this.urlApi}/taches/${tache.id}`, tache)
  }

  deleteTache(id: any):Observable<Tache>
  {
    return this.http.delete<Tache>(`${this.urlApi}/taches/${id}`)
  }

}
