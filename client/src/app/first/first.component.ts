import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService} from '../../../services/data.service';
import { MovieName} from '../../../models/moviename';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  id : String;
  keyword = "title";
  Data : MovieName[];
  constructor(private router: Router , private dataService: DataService) { }

  ngOnInit(): void {
      this.dataService.getAllMovies().subscribe( data=> {
        this.Data=data;
      });
  }

  onSubmit(){
      this.router.navigate(['/api/search',this.id]);
  }

  onSelection(item){
    this.id=item.title;
    this.router.navigate(['/api/search',this.id]);
  }
}
