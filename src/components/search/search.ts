import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  characterName: any;
  results: any;

  constructor(
    private http: Http
  ) {}

  searchCharacter(characterName){
    this.http.get(`https://swapi.co/api/people/?search=${this.characterName}`)
      .toPromise()
        .then(response => {
          this.results = response.json().results[0].name;
          console.log(this.results)
        })

    // console.log(characterName)
  }
}
