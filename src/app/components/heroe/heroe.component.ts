import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent{
  heroe: any = {};
  constructor( private activatedRoute : ActivatedRoute, private _heroesService : HeroesService) {
    this.activatedRoute.params.subscribe( params => {

      this.heroe = this._heroesService.getHeroe(params['id']);
      if (this.heroe.casa === 'DC') {
        this.heroe.casa = 'assets/img/DC_logo.png';
      }else {
        this.heroe.casa = 'assets/img/MARVEL_logo.png';
      }
    });
  }



}
