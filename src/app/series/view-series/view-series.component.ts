import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../series.service';
import { Series } from '../../model/series';
@Component({
  selector: 'app-view-series',
  templateUrl: './view-series.component.html',
  styleUrls: ['./view-series.component.css']
})
export class ViewSeriesComponent implements OnInit {
  seriesSet: Series[] = [];
  constructor(private seriesService:SeriesService) { }

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

}
