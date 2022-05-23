import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  location: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {

    this.activateRoute.parent?.params.subscribe(params => {
      let id = parseInt(params['idcharacter'])
      this.charactersService.getById(id).subscribe(response => {
        this.location = response.location;
      })

    })

  }

}
