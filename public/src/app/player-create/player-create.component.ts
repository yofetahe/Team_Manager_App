import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  player: any = {
    name: '',
    preferred_position: ''
  }

  constructor(
    private _http: HttpService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  addPlayer(){
    
    this._http.addPlayer(this.player)
      .subscribe(data => {        
        this._router.navigate(['/players/list']);
      })
  }

}
