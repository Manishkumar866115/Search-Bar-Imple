import { Injectable } from '@angular/core';
import { Movie} from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable , of , BehaviorSubject , Subject} from 'rxjs';
import { MovieName } from '../models/moviename';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getMovies( id : String){
    return this.http.get<Movie[]>("http://localhost:3000/api/search/"+id); 
  }

  getAllMovies(){
    return this.http.get<MovieName[]>("http://localhost:3000");  
  }
}
