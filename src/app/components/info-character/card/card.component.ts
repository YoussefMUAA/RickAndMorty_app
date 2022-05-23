import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.interface';
import { EpisodesService } from 'src/app/services/episodes.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() url: string = "";
  @Input() tipo: string = "";
  episode: Episode | any;
  constructor(
    private episodesServices: EpisodesService,
    private locationsServices: LocationsService
  ) { }

  async ngOnInit(): Promise<void> {
    //en funcion la url voy a pedir datos las servicio de episodes o de localtions
    if (this.tipo === 'episode') {
      //pido datos de episode al servicio de episodios y devolver un promesa
      this.episode = await this.episodesServices.getByUrl(this.url);

    } else {
      //pido datos de location

    }


  }

}
