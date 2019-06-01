import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/series.service';
import { ActivatedRoute } from '@angular/router';
import { Series } from 'src/app/model/series';

@Component({
  selector: 'app-delete-series',
  templateUrl: './delete-series.component.html',
  styleUrls: ['./delete-series.component.css']
})
export class DeleteSeriesComponent implements OnInit {
  series:Series;
  deleted:boolean=false;
  constructor(private seriesService:SeriesService, private actRouter:ActivatedRoute) { }

  ngOnInit() {
    this.actRouter.params.subscribe(
      params=>{
        if(params['id']){
          this.getSeries(params['id']);
        }
      }
    );
  }

  getSeries(id){
    this.seriesService.getSeriesById(id).subscribe(
      d=>{
        this.series = d;
        this.deleteSeries(id);
      },
      e=>console.log("Error:"+JSON.stringify(e))
    );
  }

  deleteSeries(id){
    this.seriesService.deleteSeries(id).subscribe(
      d=> this.deleted = true,
      e=>console.log("Error: Could not delete!")
    );
  }

}
