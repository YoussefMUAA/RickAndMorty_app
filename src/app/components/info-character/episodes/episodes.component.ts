import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/interfaces/episode.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  arrEpisodes: string[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersServices: CharactersService
  ) { }

  ngOnInit(): void {
    //capturar el id de la ruta del padra infoCharacter
    this.activatedRoute.parent?.params.subscribe(params => {
      let id = parseInt(params['idcharacter'])

      this.charactersServices.getById(id).subscribe(response => {
        this.arrEpisodes = response.episode;
      })

    })
  }

}
