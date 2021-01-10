import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileDetails } from './Profile/profiledetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;
  betsApiUrl: string;
  betsList: ProfileDetails[];
  
   constructor(private http: HttpClient) {
   	this.title = 'CodaChallenge'; 
    this.betsApiUrl = 'https://cors-anywhere.herokuapp.com/s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json';
  }
  
  ngOnInit(){
  	this.getItems().subscribe(data => {
      this.betsList = data;
      console.log(this.betsList);
    });
  }
  
  public getItems(): Observable<ProfileDetails[]> {
    return this.http.get<ProfileDetails[]>(this.betsApiUrl);
  }
}
