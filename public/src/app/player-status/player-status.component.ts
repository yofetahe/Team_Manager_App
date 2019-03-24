import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  players: any = [];
  player: any = {
    name: '',
    preferred_position: '',
    game_one_status: {},
    game_two_status: {},
    game_three_status: {}
  }
  game: string;
  game_one: boolean;
  game_two: boolean;
  game_three: boolean;

  // game_one_status: any = {};
  // game_two_status: any = {};
  // game_three_status: any = {};
  // data: any = {}

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPlayersStatus();
    this._route.params.subscribe((params: Params) => {
      if(params['id'] == 1){
        this.game = "Game 1";
        this.game_one = true;
        this.game_two = false;
        this.game_three = false;
      } else if(params['id'] == 2){
        this.game = "Game 2";
        this.game_one = false;
        this.game_two = true;
        this.game_three = false;
      } else if(params['id'] == 3){
        this.game = "Game 3";
        this.game_one = false;
        this.game_two = false;
        this.game_three = true;
      }
    })    
  }

  getPlayersStatus(){
    this._httpService.getAllPlayers()
      .subscribe(data => {
        this.players = data;
      })
  }

  changePlayerStatus(id: string, status: string, gameType: number) {

    for(var i = 0; i < this.players.length; i++){
      if(id == this.players[i]._id){
        this.player = this.players[i];
      }
    }
    
    if(status == 'playing') {

      if (gameType == 1){
        this.player.game_one_status = {
          playing: true, not_playing: false, undecided: false
        }
      } else if(gameType == 2){
        this.player.game_two_status = {
          playing: true, not_playing: false, undecided: false
        }
      } else if(gameType == 3){
        this.player.game_three_status = {
          playing: true, not_playing: false, undecided: false
        }
      }

    } else if(status == 'not-playing') {

      if (gameType == 1){
        this.player.game_one_status = {
          playing: false, not_playing: true, undecided: false
        }
      } else if(gameType == 2){
        this.player.game_two_status = {
          playing: false, not_playing: true, undecided: false
        }
      } else if(gameType == 3){
        this.player.game_three_status = {
          playing: false, not_playing: true, undecided: false
        }
      }
      
    } else if(status == 'undecided') {

      if (gameType == 1){
        this.player.game_one_status = {
          playing: false, not_playing: false, undecided: true
        }
      } else if(gameType == 2){
        this.player.game_two_status = {
          playing: false, not_playing: false, undecided: true
        }
      } else if(gameType == 3){
        this.player.game_three_status = {
          playing: false, not_playing: false, undecided: true
        }
      }      
    }

    this._httpService.updatePlayer(id, this.player)
      .subscribe(() => {
        this.getPlayersStatus();
      })
  }
}
