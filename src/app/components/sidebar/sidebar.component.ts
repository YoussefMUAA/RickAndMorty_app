import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  arrCharacters: Character[] = []
  next: string = "";
  prev: string = "";
  constructor(private charactersServices: CharactersService) { }

  async ngOnInit(): Promise<void> {
    const response = await this.charactersServices.getByPage();
    console.log(response)
    this.repartirDatos(response)
  }

  async prevPage() {
    if (this.prev !== null) {
      const response = await this.charactersServices.getByPage(this.prev);
      this.repartirDatos(response)
    }
  }

  async nextPage() {
    if (this.next !== null) {
      const response = await this.charactersServices.getByPage(this.next);
      this.repartirDatos(response)
    }

  }

  repartirDatos(pResponse: any): void {
    this.arrCharacters = pResponse.results;
    this.next = pResponse.info.next;
    this.prev = pResponse.info.prev;
  }

  // false == null

}
