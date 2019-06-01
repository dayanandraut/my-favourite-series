import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Series } from 'src/app/model/series';
import { SeriesService } from 'src/app/series.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.css']
})
export class AddSeriesComponent implements OnInit {
  dataForm:FormGroup;
  constructor(private fb:FormBuilder, private seriesService:SeriesService, private router:Router) { }

  ngOnInit() {
    // Creating form
    this.dataForm = this.fb.group(
      {
        title:['', {updateOn:'blur',validators:[Validators.required]}],
        favouriteCharacter:['', {updateOn:'blur',validators:[Validators.required]}],
        recentlywatched:['', {updateOn:'blur',validators:[Validators.required]}],
        rating:['', {updateOn:'blur',validators:[Validators.required, Validators.min(0), Validators.max(10)]}],
        favouriteDialogue:['', {updateOn:'change',validators:[Validators.required]}]
      }
    );
  }



  save(){
    console.log("Status: "+this.dataForm.valid);
    let series = new Series();
    series.id = null;
    series.title = this.dataForm.get("title").value;
    series.favouriteCharacter = this.dataForm.get("favouriteCharacter").value;
    series.recentlywatched = this.dataForm.get("recentlywatched").value;
    series.rating = this.dataForm.get("rating").value;
    series.favouriteDialogue = this.dataForm.get("favouriteDialogue").value;
    //console.log(series);

    this.seriesService.createSeries(series).subscribe(
      d => {
        console.log("Received:"+JSON.stringify(d))
        this.router.navigate(['/series']);
      },
      e => {
        console.log("Error:"+JSON.stringify(e));
        alert("Error: Couldn't be added!");
      }
    );
  }
  

}
