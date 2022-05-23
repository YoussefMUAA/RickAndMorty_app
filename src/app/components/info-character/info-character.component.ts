import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.scss']
})
export class InfoCharacterComponent implements OnInit {

  character: Character | any;
  constructor(
    private charactersServices: CharactersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //tengo que saber que character pedir ¿de donde lo capturo?

    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['idcharacter'])
      //observables tienen un metodo suscribe que me comunican los cambios que se producen en la api y si ahy algun cambio me lo devuelve.
      this.charactersServices.getById(id).subscribe(response => {
        this.character = response;
      })
    })


  }

}
