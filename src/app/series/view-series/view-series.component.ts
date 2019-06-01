import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../series.service';
import { Series } from '../../model/series';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-series',
  templateUrl: './view-series.component.html',
  styleUrls: ['./view-series.component.css']
})
export class ViewSeriesComponent implements OnInit {
  seriesSet: Series[] = [];
  constructor(private seriesService:SeriesService, private router:Router) { }

  ngOnInit() {
    this.populateSeries();
  }

  public populateSeries(){
    this.seriesService.getSeries().subscribe(
      data => {
        this.seriesSet = data;
        console.log("Received: "+this.seriesSet);
      },
      err => console.log("Error occured: "+err.message)
    );
  }

  navigateToNew(){
    this.router.navigate(['/series/add']);
  }

  // deleting series
  deleteSeries(id:number){

    this.router.navigate(['/series/delete',id]);
  }

}
