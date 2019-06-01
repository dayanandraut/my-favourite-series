import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SeriesService } from 'src/app/series.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Series } from 'src/app/model/series';

@Component({
  selector: 'app-update-series',
  templateUrl: './update-series.component.html',
  styleUrls: ['./update-series.component.css']
})
export class UpdateSeriesComponent implements OnInit {
  dataForm:FormGroup;
  series:Series;
  constructor(
    private fb:FormBuilder, 
    private seriesService:SeriesService, 
    private actRouter:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.actRouter.params.subscribe(
      params=>{
        if(params['id']){
          this.getSeries(params['id']);
        }
      }
    );
  }

  initializeForm(){
    this.dataForm = this.fb.group(
      {
        id:[this.series.id],
        title:[this.series.title, {updateOn:'blur',validators:[Validators.required]}],
        favouriteCharacter:[this.series.favouriteCharacter, {updateOn:'blur',validators:[Validators.required]}],
        recentlywatched:[this.series.recentlywatched, {updateOn:'blur',validators:[Validators.required]}],
        rating:[this.series.rating, {updateOn:'blur',validators:[Validators.required, Validators.min(0), Validators.max(10)]}],
        favouriteDialogue:[this.series.favouriteDialogue, {updateOn:'change',validators:[Validators.required]}]
      }
    );
  }

  // gather data for series
  getSeries(id){
    this.seriesService.getSeriesById(id).subscribe(
      d=>{
        this.series=d;
        this.initializeForm();
      },
      e=>console.log("Error:Couldn't find the series")

    );
  }

  // update data
  update(){
    this.series.title = this.dataForm.get("title").value;
    this.series.favouriteCharacter = this.dataForm.get("favouriteCharacter").value;
    this.series.recentlywatched = this.dataForm.get("recentlywatched").value;
    this.series.rating = this.dataForm.get("rating").value;
    this.series.favouriteDialogue = this.dataForm.get("favouriteDialogue").value;
    //console.log(series);

    this.seriesService.updateSeries(this.series).subscribe(
      d => {
        console.log("Updated:"+JSON.stringify(d))
        this.router.navigate(['/series']);
      },
      e => {
        console.log("Error:"+JSON.stringify(e));
        alert("Error: Couldn't be added!");
      }
    );
  }

  
}
