import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , ParamMap} from '@angular/router';
import { Movie} from '../../../models/movie';
import { DataService} from '../../../services/data.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent implements OnInit {
  id : String;
  Movies : Movie[];
  constructor(private router: Router, private dataService : DataService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap)=>{
      this.id=params.get('id');
      this.dataService.getMovies(this.id).subscribe( data=> {
        this.Movies=data;
      });
    })
  }

}
