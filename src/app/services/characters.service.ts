import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string = 'https://rickandmortyapi.com/api/character';
  constructor(private httpClient: HttpClient) { }


  getByPage(pUrl: string = this.baseUrl): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(pUrl))
  }

  getById(pId: number): Observable<Character> {
    //en observables no usamos lastValueFrom simplemente llamamos a httpClient
    return this.httpClient.get<Character>(this.baseUrl + "/" + pId);
  }

}
