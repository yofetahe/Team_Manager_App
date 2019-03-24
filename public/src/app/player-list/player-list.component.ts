import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: any;
  //  = {
  //   name: '',
  //   preferred_position: ''
  // }

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers(){
    this._http.getAllPlayers()
      .subscribe(data => this.players = data);
  }

  deletePlayer(id: string){
    this._http.deletePlayer(id)
      .subscribe(data => {
        this.getAllPlayers();
      })
  }
  
}
