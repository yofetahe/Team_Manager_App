import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPlayers() {
    return this._http.get('/api/team_manager');
  }
  getPlayerById(id: string) {
    return this._http.get(`/api/team_manager/${id}`)
  }
  addPlayer(data: any){
    return this._http.post('/api/team_manager', data);
  }
  updatePlayer(id: string, data: any){
    return this._http.put(`/api/team_manager/${id}`, data);
  }
  deletePlayer(id: string){
    return this._http.delete(`/api/team_manager/${id}`);
  }

}
