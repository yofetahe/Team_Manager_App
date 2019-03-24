import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: PlayerListComponent},
  {path: 'players/list', component: PlayerListComponent},
  {path: 'players/addplayer', component: PlayerCreateComponent},
  {path: 'players/status/game/:id', component: PlayerStatusComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
