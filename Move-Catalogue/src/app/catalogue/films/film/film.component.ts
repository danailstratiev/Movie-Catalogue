import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { baseUrl, defaultPosterSize, smallPosterSize, filmPath } from 'src/app/shared/constants/app.paths';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() film:any;
  public baseUrl:string;
  public defaultPosterSize:string;
  public filmPath:string;
  public smallPosterSize:string;

  constructor() { 
    this.baseUrl = baseUrl,
    this.defaultPosterSize = defaultPosterSize,
    this.filmPath = filmPath;
    this.smallPosterSize = smallPosterSize;
  }

  ngOnInit(): void {
  }

}
